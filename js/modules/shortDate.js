class ShortDate {

    //TODO: Fix types here. Very janky rn

    constructor(month, day, year) {
        this.month = month
        this.day = day
        this.year = year
        this.numMonth = 0
        this.numDay = 0
        this.numYear = 0
    }

    isValid() {
        const regex = /^[0-9]{2}$/

        this.numMonth = Number(this.month)
        this.numDay = Number(this.day)
        this.numYear = Number(this.year)

        if(this.month !== '' && this.day !== '' && (regex.test(this.month) && regex.test(this.day))) {
            if(this.month === '02') {
                if(this.day === '28') {
                    return true
                } else if(this.day === '29') {
                    if(this.year === '') {
                        return true
                    } else if(this.numYear % 4 === 0) {
                        return true
                    }
                }
            } if(['04', '06', '09', '11'].includes(this.month)) {
                console.log('very good')
                console.log(this.numDay)
                if(this.numDay <= 30 && this.numDay > 0) {
                    console.log('super good')

                    return true
                }
            } else if(this.numMonth <= 12 && this.numMonth > 0 && this.numMonth !== 2) {
                if(this.numDay <= 31 && this.numDay > 0) {
                    return true
                }
            }
        } else if(this.month !== '' && regex.test(this.month)) {
            if(this.numMonth <= 12 && this.numMonth > 0) {
                return true
            }
        }

        return false
    }

    localeCompare(date) {
        if(this.numYear > date.numYear) {
            return -1
        } else if(this.numYear === date.numYear) {
            if (this.numMonth > date.numMonth) {
                return -1
            } else if(this.numMonth === date.numMonth) {
                if(this.numDay > date.numDay) {
                    return -1
                } else if(this.numDay === date.numDay) {
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

export default ShortDate