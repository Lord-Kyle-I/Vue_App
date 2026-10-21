class FamilyDate {

    constructor(month, day, year) {
        this.month = month
        this.day = day
        this.year = year
    }

    isValid() {
        if(this.month !== '' && this.day !== '') {
            if(this.month === 2) {
                if(this.day === 28) {
                    return true
                } else if(this.day === 29) {
                    if(this.year === null) {
                        return true
                    } else if(this.year % 4 === 0) {
                        return true
                    }
                }
            } if([4, 6, 9, 11].includes(this.month)) {
                if(this.day <= 30 && this.day > 0) {
                    return true
                }
            } else if(this.month <= 12 && this.month > 0 && this.month !== 2) {
                if(this.day <= 31 && this.day > 0) {
                    return true
                }
            }
        } else if(this.month !== '') {
            if(this.month <= 12 && this.month > 0) {
                return true
            }
        }
        return false
    }

    localeCompare(date) {
        if(this.year > date.year) {
            return -1
        } else if(this.year === date.year) {
            if (this.month > date.month) {
                return -1
            } else if(this.month === date.month) {
                if(this.day > date.day) {
                    return -1
                } else if(this.day === date.day) {
                    return 0
                } else {
                    return 1
                }
            } else {
                return 1
            }
        } else {
            return 1
        }
    }

    toString() {
        return `${this.month}/${this.day}/${this.year}`
    }
}

export default FamilyDate