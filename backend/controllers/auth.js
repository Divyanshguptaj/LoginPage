import prisma from "../prisma/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const authHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ success:false, message: "Invalid credentials" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await prisma.user.create({
        data: { email, password: hashedPassword },
      });
    }

    jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({ success:true, message: "Login successful", user: { id: user.id, email: user.email } });
  } catch (error) {
    console.log("object")
    return res.status(500).json({ success:false, message: "can't create" });
  }
};
