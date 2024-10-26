import parse from 'html-react-parser';

export const parseText = (data: string) => {
    const boldText = data.match(/""([^""]*)""/g)
    const italicText = data.match(/"""([^""]*)"""/g)
    const taggedText = data.match(/""""([^"""]*)""""/g)

    let parsedText = data
    taggedText?.forEach(word => {
        parsedText = parsedText.replace(word, `<span class='tagged-text text14b'>${word.replace(/""""/g, '')}</span>`)
    })
    italicText?.forEach(word => {
        parsedText = parsedText.replace(word, `<i>${word.replace(/"""/g, '')}</i >`)
    })
    boldText?.forEach(word => {
        parsedText = parsedText.replace(word, `<b>${word.replace(/""/g, '')}</b >`)
    })
    return parse(parsedText)
}