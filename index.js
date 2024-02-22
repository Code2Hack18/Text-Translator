const express = require('express');
const translate = require('google-translate-api-x');

const app = express();
const port = 8000;

app.use(express.json());

app.post('/translate', async (req, res) => {
    const { text, target_language } = req.body;
    if (!text || !target_language) {
        return res.status(400).json({ error: 'Both text and target_language are required' });
    }

    try {
        const translation = await translate(text, { to: target_language });
        res.json({ translation: translation.text });
    } catch (err) {
        console.error('Translation error:', err);
        res.status(500).json({ error: 'An error occurred during translation' });
    }
});

app.listen(port, () => {
    console.log(`Translation API listening at http://localhost:${port}`);
});


//Languages Shortforms

// English: en
// Hindi: hi
// Spanish: es
// French: fr
// German: de
// Italian: it
// Russian: ru
// Chinese (Simplified): zh-CN
// Chinese (Traditional): zh-TW
// Japanese: ja
// Korean: ko
// Arabic: ar
// Portuguese: pt
// Dutch: nl
// Swedish: sv
// Norwegian: no
// Danish: da
// Finnish: fi
// Greek: el
// Turkish: tr
// Polish: pl