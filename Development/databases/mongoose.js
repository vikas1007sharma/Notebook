// Import dependencies
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error', err));

// Define Mongoose schema and model
const modelSchema = new mongoose.Schema({
  field1: String,
  field2: String,
  relatedField: { type: mongoose.Schema.Types.ObjectId, ref: 'OtherModel' },
  tags: [String],
  scores: [Number],
  age: Number,
  category: String,
  price: Number,
});
const Model = mongoose.model('Model', modelSchema);

// Database Operations
// ============================

// Show all databases (No direct Mongoose equivalent)
mongoose.connection.db.admin().listDatabases()
  .then(dbs => console.log('Databases:', dbs.databases))
  .catch(err => console.error(err));

// Drop the current database
mongoose.connection.dropDatabase()
  .then(() => console.log('Database dropped'))
  .catch(err => console.error(err));

// Show all collections
mongoose.connection.db.listCollections()
  .toArray()
  .then(collections => console.log('Collections:', collections))
  .catch(err => console.error(err));

// Drop a specific collection
mongoose.connection.db.dropCollection('models')
  .then(() => console.log('Collection dropped'))
  .catch(err => console.error(err));

// CRUD Operations
// ============================

// Insert Documents
Model.create({ field1: 'value1', field2: 'value2' })
  .then(doc => console.log('Document Created:', doc))
  .catch(err => console.error(err));

Model.insertMany([
  { field1: 'value1', field2: 'value2' },
  { field1: 'value3', field2: 'value4' }
])
  .then(docs => console.log('Documents Created:', docs))
  .catch(err => console.error(err));

// Query Documents
Model.find()
  .then(docs => console.log('All Documents:', docs))
  .catch(err => console.error(err));

Model.find({ field1: 'value1' })
  .then(docs => console.log('Filtered Documents:', docs))
  .catch(err => console.error(err));

Model.findOne({ field1: 'value1' })
  .then(doc => console.log('Single Document:', doc))
  .catch(err => console.error(err));

Model.findById('someObjectId')
  .then(doc => console.log('Document by ID:', doc))
  .catch(err => console.error(err));

// Update Documents
Model.findByIdAndUpdate('someObjectId', { field1: 'newValue' }, { new: true })
  .then(doc => console.log('Updated Document:', doc))
  .catch(err => console.error(err));

Model.updateMany({ field1: 'value1' }, { $set: { field1: 'newValue' } })
  .then(result => console.log('Update Result:', result))
  .catch(err => console.error(err));

// Delete Documents
Model.findByIdAndDelete('someObjectId')
  .then(result => console.log('Deleted Document:', result))
  .catch(err => console.error(err));

Model.deleteMany({ field1: 'value1' })
  .then(result => console.log('Deleted Documents:', result))
  .catch(err => console.error(err));

// Advanced Queries
// ============================

// Limit, Skip, and Sort
Model.find().limit(10).skip(5).sort({ field1: -1 })
  .then(docs => console.log('Limited, Skipped, Sorted Documents:', docs))
  .catch(err => console.error(err));

// Find with Regular Expression
Model.find({ field1: { $regex: 'pattern', $options: 'i' } })
  .then(docs => console.log('Regex Search Result:', docs))
  .catch(err => console.error(err));

// Aggregation
Model.aggregate([
  { $match: { field1: 'value1' } },
  { $group: { _id: "$category", total: { $sum: "$price" } } },
  { $sort: { total: -1 } }
])
  .then(result => console.log('Aggregation Result:', result))
  .catch(err => console.error(err));

// Populate Related Field
Model.find().populate('relatedField')
  .then(docs => console.log('Populated Documents:', docs))
  .catch(err => console.error(err));

// Array Operations
Model.find({ tags: "tagValue" })
  .then(docs => console.log('Array Contains Query:', docs))
  .catch(err => console.error(err));

Model.find({ scores: { $elemMatch: { $gt: 80 } } })
  .then(docs => console.log('Array Element Match Query:', docs))
  .catch(err => console.error(err));

// Field Existence Check
Model.find({ field1: { $exists: true } })
  .then(docs => console.log('Field Existence Query:', docs))
  .catch(err => console.error(err));

// Text Search (Requires a text index)
Model.createIndexes({ field1: 'text' })
  .then(() => {
    Model.find({ $text: { $search: "text to search" } })
      .then(docs => console.log('Text Search Result:', docs))
      .catch(err => console.error(err));
  })
  .catch(err => console.error('Error creating index', err));

// Insert with Order Control
Model.insertMany([
  { field1: 'value1', field2: 'value2' },
  { field1: 'value3', field2: 'value4' }
], { ordered: false })
  .then(docs => console.log('Unordered Insert:', docs))
  .catch(err => console.error(err));

// Close the connection after all operations are complete
mongoose.connection.close();


// Define the Course Schema
const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: String, required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }] // Array of references to Student model
});

// Define the Student Schema
const studentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }] // Array of references to Course model
});

async function getStudentWithCourses(studentId) {
  const student = await Student.findById(studentId).populate('courses');
  console.log(student);
  return student;
}