export default class Post {
    id:number
    title:string
    description:string
    post_img:string

    constructor(id:number, title:string, description:string, post_img:string) {
        this.id = id,
        this.title = title
        this.description = description
        this.post_img = post_img
    }
}