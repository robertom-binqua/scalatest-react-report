import lunr from "lunr";
import {LunrDocument, LunrDocumentEntry} from "./model";

export interface IndexSearch {
    search: (textToSearch: string) => string[]
}

export const defaultIndexSearch: IndexSearch = {
    search(textToSearch: string): string[] {
        return []
    }
}

export class LunrIndexSearch implements IndexSearch {
    private lunrIndex: lunr.Index;

    constructor(lunrDocument: LunrDocumentEntry[]) {
        this.lunrIndex = lunr(function (this: lunr.Builder) {
            this.ref('ref')
            this.field('url')
            this.field('title')
            this.field('bodyWithNoHtmlTags')
            this.field('body')

            lunrDocument.forEach(function (this: lunr.Builder, doc) {
                this.add(doc)
            }, this)
        })
    }

    search(textToSearch: string): string[] {
        let results = this.lunrIndex.search(textToSearch);
        console.log(results)
        return results.map(r => r.ref);
    }
}