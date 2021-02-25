const formatVolumeIconPath = require("../assets/scripts/main");
describe("slider tests", () => {
    test("low volume", () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
        expect(formatVolumeIconPath(1)).toBe(`./assets/media/icons/volume-level-1.svg`);
        expect(formatVolumeIconPath(33)).toBe(`./assets/media/icons/volume-level-1.svg`);
        expect(formatVolumeIconPath(34)).toBe(`./assets/media/icons/volume-level-2.svg`);
        expect(formatVolumeIconPath(66)).toBe(`./assets/media/icons/volume-level-2.svg`);
        expect(formatVolumeIconPath(67)).toBe(`./assets/media/icons/volume-level-3.svg`);
        expect(formatVolumeIconPath(100)).toBe(`./assets/media/icons/volume-level-3.svg`);
    })
})