import {writable} from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nam vitae, expedita iste asperiores numquam consequatur tempore at molestiae optio? Sequi ipsum omnis praesentium ad aperiam deserunt neque tenetur temporibus.",
    },
    {
        id: 2,
        rating: 5,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nam vitae, expedita iste asperiores numquam consequatur tempore at molestiae optio? Sequi ipsum omnis praesentium ad aperiam deserunt neque tenetur temporibus.",
    },
    {
        id: 3,
        rating: 7,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis nam vitae, expedita iste asperiores numquam consequatur tempore at molestiae optio? Sequi ipsum omnis praesentium ad aperiam deserunt neque tenetur temporibus.",
    },
])