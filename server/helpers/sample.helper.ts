export interface SampleInfoModel {
    id: number;
    title: string;
    date: string;
}

export class SampleHelper {
    static getSample(): SampleInfoModel[] {
        return [
            {
                id: 1,
                title: "Title 1",
                date: "2020-01-01"
            },
            {
                id: 2,
                title: "Title 2",
                date: "2020-01-02"
            }
        ];
    }

    static getSampleIds(): number[] {
        return [1, 2];
    }

    static getSampleDetail(id: number): SampleInfoModel {
        let sampleInfo: SampleInfoModel = null;

        switch(id) {
            case 1:
                sampleInfo = {
                    id: 1,
                    title: "Title 1",
                    date: "2020-01-01"
                };
                break;
            case 2:
                sampleInfo = {
                    id: 2,
                    title: "Title 2",
                    date: "2020-01-02"
                };
                break;
        }

        return sampleInfo;
    }
}