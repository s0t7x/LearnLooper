"use strict";

export default class Exam {

    
    constructor (subject, examDate, tries, credits, professor, difficulty = 5) 
    {
        this._subject = subject;
        this._difficulty = difficulty;

        this._examDate = examDate;
        this._professor = professor;
        this._tries = tries;
        this._credits = credits;
        // 
        // Base-Entries
        //
        this._createdOn = new Date().toLocaleDateString();
    }

    
}
