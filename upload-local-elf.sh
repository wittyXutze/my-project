#!/bin/bash
set -e
echo "🚀 Upload firmware.elf (Simulation)"
mkdir -p dist
echo "dummy firmware content" > dist/firmware.elf
