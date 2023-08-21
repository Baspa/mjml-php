import mjml2html from 'mjml'

const args = JSON.parse(process.argv.slice(2));

const mjml = args[0];
const options = args[1];

try {
    const result = mjml2html(mjml);
} catch (exception) {
    const errorString = JSON.stringify({mjmlError: exception.toString()});

    process.stdout.write(errorString);
    process.exit(0);
}


process.stdout.write(JSON.stringify(result));
