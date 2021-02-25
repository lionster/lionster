const condition = true;
const edgeCondition = true;

if (condition) {
    // do something specific
} else {
    // for everything else do this
}

if (condition) {
    // do something specific
} else if (edgeCondition) {
    // else something specific
} else {
    throw new Error('Unexpected condition');
}
