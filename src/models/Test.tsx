import mongoose, { Document, Schema } from 'mongoose';

interface ITest extends Document {
    name: string;
}

const TestSchema: Schema = new Schema({
    name: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Test || mongoose.model<ITest>('Test', TestSchema);
