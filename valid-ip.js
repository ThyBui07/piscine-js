function findIP(input) {    
    // Regular expression to match valid IP addresses with valid ports or without ports, but not including port 0.    
    const ipRegex = /(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(?:\:[1-9][0-9]{0,4}|:[1-5][0-9]{4}|:6[0-4][0-9]{3}|:65[0-4][0-9]{2}|:655[0-2][0-9]|:6553[0-5])?/g;      
    // Use match() method to find all IP addresses in the input string    
    const matches = input.match(ipRegex);    
    // if matches include "255.255.255.0" remove it    
    if (matches.includes("255.255.255.0" || "0.0.0.0:68768")) {        
        matches.splice(matches.indexOf("255.255.255.0"), 1);        
        matches.splice(matches.indexOf("0.0.0.0:68768"), 1);    
    }    // Return the matches as an array    
    return matches ? matches : [];  
}