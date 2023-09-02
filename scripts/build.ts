import url from "url";
import path from "path";
import fs from "fs-extra";
import autocorrect from "autocorrect-node";

import YAML from 'js-yaml';
import metadataParser from 'markdown-yaml-metadata-parser';

import { renderMdx } from "./mdx.ts";

const PUBLIC_DIR = "public";
const DOC_DIR = "doc";
const DIST_DIR = "dist";

const projectRoot = path.dirname(path.dirname(url.fileURLToPath(import.meta.url)));
const docDir = path.join(projectRoot, DOC_DIR);
const docs = fs.readdirSync(docDir, "utf-8");

function buildPages() {
    docs.forEach(function (e, i) {
        var markdown = metadataParser(fs.readFileSync(path.join(projectRoot, DOC_DIR, e), "utf-8")).content;
        console.log(markdown);
        markdown = autocorrect.formatFor(markdown, 'markdown');
        
        var result = renderMdx(markdown);
        fs.ensureDir(path.join(projectRoot, DIST_DIR));
        fs.writeFileSync(path.join(projectRoot, DIST_DIR, `${e}.json`), JSON.stringify(result));
    });
}

function buildPublic() {
    fs.ensureDir(path.join(projectRoot, PUBLIC_DIR));
    fs.copySync(path.join(projectRoot, PUBLIC_DIR), path.join(projectRoot, DIST_DIR));
}

buildPages();
buildPublic();