import mongoose from 'mongoose';
import { connectToDatabase } from '../mongoose';
import dotenv from "dotenv"
dotenv.config()
describe('connectToDatabase', () => {

  it('should successfully connect to mongo', async () => {

    // Mock successful mongoose connection
    jest.spyOn(mongoose, 'connect')
      .mockResolvedValueOnce(mongoose);

    const msg = await connectToDatabase();

    expect(msg).toBe('Connected to MongoDB');
    expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGO_URI);
  });

//   it('should return error message on connection failure', async () => {
    
//     // Mock failed connection
//     jest.spyOn(mongoose, 'connect')
//       .mockRejectedValueOnce(new Error('Connection failed'));

//     const msg = await connectToDatabase();

//     expect(msg).toBe('No connection to mongo :((');
//     expect(console.error).toHaveBeenCalled();  

//   });

});