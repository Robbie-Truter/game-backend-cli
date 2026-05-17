import { registerService } from '../../services/auth/registerService.js';
import bcrypt from 'bcrypt';
import { asyncWrapper } from '../../utils/asyncWrapper.js';

const registerController = asyncWrapper(async (req, res) => {
  const { password, ...bodyRemainder } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);

  await registerService({ ...bodyRemainder, passwordHash });

  res.status(201).json({ message: 'User created successfully' });
});

export default registerController;
