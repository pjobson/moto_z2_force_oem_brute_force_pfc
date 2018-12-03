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

There are a total of 36<sup>20</sup> combinations which is this many, if my math is not off `13,367,495,000,000,000,000,000,000,000,000`, at about `0.006` seconds per try, it would take about 2.5 Sextillion years to complete, the end of the universe is expected to occur in the next 5 Billion years.  Unless you get lucky, you're probably out of luck in using this for any practical application.


Running all of them would take a really long time, though if you're bored, you can experiment with this.

I'm running node v10.1.0.

    git clone git@github.com:pjobson/moto_z2_force_oem_brute_force_pfc.git
    npm install
    adb reboot bootloader
    fastboot devices
    node oemunlockbrute.js

It'll show you the progress as it goes.

	Iteration: 0
	Tried: 00000000000000000000
	Returned: ...
	(bootloader) Code validation failure
	OKAY [  0.012s]
	finished. total time: 0.012s

	Iteration: 1
	Tried: 10000000000000000000
	Returned: ...
	(bootloader) Code validation failure
	OKAY [  0.006s]
	finished. total time: 0.006s

	Iteration: 2
	Tried: 20000000000000000000
	Returned: ...
	(bootloader) Code validation failure
	OKAY [  0.006s]
	finished. total time: 0.006s

	Iteration: 3
	Tried: 30000000000000000000
	Returned: ...
	(bootloader) Code validation failure
	OKAY [  0.006s]
	finished. total time: 0.006s

	Iteration: 4
	Tried: 40000000000000000000
	Returned: ...
	(bootloader) Code validation failure
	OKAY [  0.006s]
	finished. total time: 0.006s

	Iteration: 5
	Tried: 50000000000000000000
	Returned: ...
	(bootloader) Code validation failure
	OKAY [  0.006s]
	finished. total time: 0.006s

	Iteration: 6
	Tried: 60000000000000000000
	Returned: ...
	(bootloader) Code validation failure
	OKAY [  0.006s]
	finished. total time: 0.006s

	Iteration: 7
	Tried: 70000000000000000000
	Returned: ...
	(bootloader) Code validation failure
	OKAY [  0.006s]
	finished. total time: 0.006s

	Iteration: 8
	Tried: 80000000000000000000
	Returned: ...
	(bootloader) Code validation failure
	OKAY [  0.006s]
	finished. total time: 0.006s

	Iteration: 9
	Tried: 90000000000000000000
	Returned: ...
	(bootloader) Code validation failure
	OKAY [  0.006s]
	finished. total time: 0.006s

	Iteration: 10
	Tried: A0000000000000000000
	Returned: ...
	(bootloader) Code validation failure
	OKAY [  0.006s]
	finished. total time: 0.006s

It checks to see if the device returns "Code validation failure" then tries the next code if so.  If not, it'll display something else and stop.  I have no idea what it will display if anything.
