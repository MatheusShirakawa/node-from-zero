import { randomUUID } from "node:crypto";

export class DatabaseMemory {
    #videos = new Map();

    list(search) {
        console.log(this.#videos.entries());
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
                const id = videoArray[0];
                const data = videoArray[1];

                return {
                    id,
                    ...data,
                };
            })
            .filter((video) => {
                if (search) {
                    return video.title.includes(search);
                }
                return true;
            });
    }

    // Set, Map

    create(video) {
        const videoId = randomUUID();
        console.log(videoId);
        console.log(randomUUID());

        // UUID - unic universe id

        this.#videos.set(videoId, video);
    }

    update(id, video) {
        this.#videos.set(id, video);
    }

    delete(id, video) {
        this.#videos.delete(id);
    }
}
