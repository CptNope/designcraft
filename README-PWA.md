# DesignCraft PWA

This fork builds the upstream Rust/WebAssembly DesignCraft as an installable PWA at https://cptnope.github.io/designcraft/.

The mobile layout prioritizes document canvas, Pages and Properties views; desktop UI remains unchanged. Install from your browser after a successful GitHub Pages deployment.

Upstream desktop test, release, FreeBSD, Nix and Windows ARM64 workflows remain available manually; they are not deleted. The PWA workflow builds the web target without running the whole workspace test suite.

Offline caching stores app assets, **not user documents**. Export work and keep backups. WebGPU support and mobile controls depend on your browser and device.
