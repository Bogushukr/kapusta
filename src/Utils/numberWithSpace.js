export function numberWithSpace(x, d = 2, g = " ") {
    return x.toFixed(d).replace(/\B(?=(\d{3})+(?!\d))/g, g)
}