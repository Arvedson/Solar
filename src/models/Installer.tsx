import mongoose, { Schema, Document, Model } from 'mongoose';

interface IInstaller extends Document {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceAreas: string[];
}

const InstallerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  serviceAreas: { type: [String], default: [] },
});

const Installer: Model<IInstaller> = mongoose.models.Installer || mongoose.model<IInstaller>('Installer', InstallerSchema);

export default Installer;
