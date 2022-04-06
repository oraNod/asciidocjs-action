const core = require('@actions/core');
const github = require('@actions/github');
const glob = require('glob')
const asciidoctor = require('asciidoctor')()

const docsPath = core.getInput('docs_path');
path = require('path');
// list markdown files at root of project folder
const location = path.join(__dirname, ${docsPath}),
patt = path.join(location, '**.asciidoc');

glob(patt, (err, files) => {
  files.forEach(function (adocfile) {
    asciidoctor.convertFile(adocfile, { doctype: 'book', safe: 'unsafe' })
  })
})
