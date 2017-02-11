import mongoose, { Schema } from 'mongoose'

const boxSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  sold: {
    type: Number
  },
  changed: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

boxSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      sold: this.sold,
      changed: this.changed
    };

    return full ? {
        ...view
        // add properties for a full view
      } : view
  }
};

const model = mongoose.model('Box', boxSchema);

export const schema = model.schema;
export default model
