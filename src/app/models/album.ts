import { Song } from "./song";

export interface Album{ 

    id:number;
    name:string;
    artist:string;
    review:string;
    songs:Song;
    price:number;
    rating:number;
    totalVotes:number;
}