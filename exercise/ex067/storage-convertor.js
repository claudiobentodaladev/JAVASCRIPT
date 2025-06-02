const megabytes = (GB) => 1024 * GB;
const kilobytes = (MB) => 1024 * MB;
const bytes = (KB) => 1024 * KB;

const gigabytes = 11

console.log(`Gigabytes ${gigabytes}GB`);
console.log(`to megabytes ${megabytes(gigabytes)} MB`);
console.log(`to kilobytes ${kilobytes(megabytes(gigabytes))} KB`);
console.log(`to bytes ${bytes(kilobytes(megabytes(gigabytes)))} B`);