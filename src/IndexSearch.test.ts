import {LunrDocumentEntry} from './model';
import {LunrIndexSearch} from "./IndexSearch";

describe('LunrIndexSearch', () => {
    const sampleDocs: LunrDocumentEntry[] = [
        {
            ref: '1',
            url: 'dog',
            title: 'First Page',
            body: 'This is the first page with content about JavaScript and dog TypeScript. dog',
            bodyWithNoHtmlTags: 'dog house cat',
        },
        {
            ref: '2',
            url: '/page-2',
            title: 'Second Page',
            body: 'Another page with different content mentioning React. dog',
            bodyWithNoHtmlTags: 'Another page with different content mentioning React fish',
        },
        {
            ref: '3',
            url: '/page-3',
            title: 'Third Page',
            body: 'Another page with different content JavaScript dog React. /page-3',
            bodyWithNoHtmlTags: 'dog house cat dog',
        },
    ]


    it('returns matching ref for a text in the body', () => {
        const searcher = new LunrIndexSearch(sampleDocs);
        const results = searcher.search('JavaScript');
        expect(results).toStrictEqual(['1', '3']);
    });

    it('returns matching ref for a text in the bodyWithNoHtmlTags', () => {
        const searcher = new LunrIndexSearch(sampleDocs);
        const results = searcher.search('fish');
        expect(results).toStrictEqual(['2']);
    });

    it('returns matching ref for a text in the title', () => {
        const searcher = new LunrIndexSearch(sampleDocs);
        const results = searcher.search('Second');
        expect(results).toStrictEqual(['2']);
    });

    it('returns empty array for non-matching term', () => {
        const searcher = new LunrIndexSearch(sampleDocs);
        const results = searcher.search('Python');
        expect(results).toEqual([]);
    });

    it('returns multiple matches when applicable: the result is sorted by occurrences score', () => {
        const searcher = new LunrIndexSearch(sampleDocs);
        const results = searcher.search('dog');
        expect(results).toStrictEqual(['1', '3', '2']);
    });
});