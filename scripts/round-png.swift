import AppKit
import Foundation

guard CommandLine.arguments.count == 4 else {
    FileHandle.standardError.write(Data("Usage: round-png.swift input output radius\n".utf8))
    exit(1)
}

let inputURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[2])
let radius = CGFloat(Double(CommandLine.arguments[3]) ?? 48)

guard
    let image = NSImage(contentsOf: inputURL),
    let source = image.cgImage(forProposedRect: nil, context: nil, hints: nil)
else {
    FileHandle.standardError.write(Data("Could not read image: \(inputURL.path)\n".utf8))
    exit(1)
}

let width = source.width
let height = source.height
let colorSpace = CGColorSpaceCreateDeviceRGB()

guard
    let context = CGContext(
        data: nil,
        width: width,
        height: height,
        bitsPerComponent: 8,
        bytesPerRow: 0,
        space: colorSpace,
        bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
    )
else {
    FileHandle.standardError.write(Data("Could not create image context\n".utf8))
    exit(1)
}

let rect = CGRect(x: 0, y: 0, width: width, height: height)
let path = CGPath(
    roundedRect: rect,
    cornerWidth: radius,
    cornerHeight: radius,
    transform: nil
)

context.addPath(path)
context.clip()
context.draw(source, in: rect)

guard
    let rounded = context.makeImage(),
    let destination = CGImageDestinationCreateWithURL(outputURL as CFURL, "public.png" as CFString, 1, nil)
else {
    FileHandle.standardError.write(Data("Could not create output image\n".utf8))
    exit(1)
}

CGImageDestinationAddImage(destination, rounded, nil)

if !CGImageDestinationFinalize(destination) {
    FileHandle.standardError.write(Data("Could not write image: \(outputURL.path)\n".utf8))
    exit(1)
}
