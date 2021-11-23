import { makeAutoObservable } from "mobx";

class PaginateStore {
    currentPage = 1;
    countPerPage = 2;

    constructor() {
        makeAutoObservable(this);
    }

    paginate(pageNumber) {
        this.currentPage = pageNumber;
    }
}

const storePaginate = new PaginateStore();

export default storePaginate;