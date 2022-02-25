const fs = require('fs');
const path = require('path');

// function to encode file data to base64 encoded string
function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer.from(bitmap).toString('base64');
}

exports.get = (req, res, next) => {
  res.status(200).json({
    professionalName: 'Griffin Pope',
    base64Image: base64_encode(path.join(__dirname, '../public/img/weird.jpg')),
    nameLink: {
      firstName: 'Griffin',
      url: 'https://www.google.com',
    },
    primaryDescription: 'A student in CSE341',
    workDescription1: 'Work description first line',
    workDescription2: 'Work description line 2',
    linkTitleText: 'Software Engineer 5',
    linkedInLink: {
      text: 'Linked In',
      link: 'https://www.linkedin.com',
    },
    githubLink: {
      text: 'My Github',
      link: 'https://github.com/grriffin',
    },
  });
};
