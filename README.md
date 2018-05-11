# Motorola Moto Z2 Force OEM Unlock 

## Brute Force Proof of Concept

This is a proof of concept for brute forcing the Moto Z2 Force OEM Unlock.

As of this writing bootloader unlocking the Z2 Force for AT&T is not available.  

This tries to brute force the code by iterating through each possible code:

    fastboot oem unlock 00000000000000000000
    fastboot oem unlock 10000000000000000000
    fastboot oem unlock 20000000000000000000
    fastboot oem unlock 30000000000000000000
    fastboot oem unlock 40000000000000000000
    fastboot oem unlock 50000000000000000000
    fastboot oem unlock 60000000000000000000
    ...a very long time later...
    fastboot oem unlock ZZZZZZZZZZZZZZZZZZZZ

I let it run for a couple hours and got through 1,643,833 combinations which was up to `Z8E10000000000000000`.

There are a total of 36<sup>20</sup> combinations which is this many, if my math is not off `13,367,495,000,000,000,000,000,000,000,000`.

Running all of them would take a really long time, though if you're bored, you can experiment with this.

I'm running node v10.1.0.

    git clone git@github.com:pjobson/moto_z2_force_oem_brute_force_pfc.git
    npm install
    adb reboot bootloader
    fastboot devices
    node oemunlockbrute.js

