import { Request, Response } from 'express';
import User from '../models/user';
import { sendEmail } from '../helpers/email';

const getUsers = async (req: Request, res: Response) => {
  const { limit = 10, from = 0 } = req.query;
  const query = { state: true };

  const [total, users] = await Promise.all([
    User.countDocuments({}),
    User.find({}).skip(Number(from)).limit(Number(limit)),
  ]);
  res.json({
    total,
    users,
  });
};

const postUsers = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  try {
    await user.save();
    res.json({
      msg: 'post API',
      user,
    });
  } catch (error) {
    console.log('aca imprimo el error', error);
    res.status(400).json({
      error,
    });
  }
};

const userEmail = async (req: Request, res: Response) => {
  const responseMsg = await sendEmail();
  res.json({
    msg: 'send email',
    responseMsg,
  });
};
export { getUsers, postUsers, userEmail };
