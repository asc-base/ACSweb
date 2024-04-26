const GenerateMinuteLeft = (minute: number): Date => {
    const date = new Date()
    date.setMinutes(date.getMinutes() + minute)
    return date
}

export default GenerateMinuteLeft
