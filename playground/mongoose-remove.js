const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/* Will not return the documents */
// Todo.remove({}).then((res) => {
//     console.log(res.result);
// }).catch((err) => {
//     console.log(err);
// });

/* Both will return the removed doc and remove it
 * Todo.findOneAndRemove
 * Todo.findByIdAndRemove
 */

Todo.findByIdAndRemove("595a8003d3cd8aaf70a05474").then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});

