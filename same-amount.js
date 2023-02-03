function sameAmount(string, regex1, regex2) {
    let match1 = (string.match(new RegExp(regex1, "g")) || []).length;
    let match2 = (string.match(new RegExp(regex2, "g")) || []).length;
    return match1 === match2
}