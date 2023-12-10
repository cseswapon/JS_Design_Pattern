// The TV and speaker share the same interface
function TV() {
   this.increaseVolume = function() {
       // logic to increase TV volume
   }

   this.decreaseVolume = function() {
       // logic to decrease TV volume
   }

   this.mute = function() {
       // logic to mute TV audio
   }
}

function Speaker() {
   this.increaseVolume = function() {
       // logic to increase speaker volume
   }

   this.decreaseVolume = function() {
       // logic to decrease speaker volume
   }

   this.mute() = function() {
       // logic to mute speaker audio
   }
}

// The two remotes make use of the same common interface
// that supports volume up and volume down features
function SimpleRemote(device) {
   this.pressVolumeDownKey = function() {
       device.decreaseVolume()
   }

   this.pressVolumeUpKey = function() {
       device.increaseVolume()
   }
}

function AdvancedRemote(device) {

   this.pressVolumeDownKey = function() {
       device.decreaseVolume()
   }

   this.pressVolumeUpKey = function() {
       device.increaseVolume()
   }

   this.pressMuteKey = function() {
       device.mute()
   }
}

function run() {

   let tv = new TV()
   let speaker = new Speaker()

   let tvSimpleRemote = new SimpleRemote(tv)
   let tvAdvancedRemote = new AdvancedRemote(tv)

   let speakerSimpleRemote = new SimpleRemote(speaker)
   let speakerAdvancedRemote = new AdvancedRemote(speaker)

   // The methods listed in pair below will have the same effect
   // on their target devices
   tvSimpleRemote.pressVolumeDownKey()
   tvAdvancedRemote.pressVolumeDownKey()

   tvSimpleRemote.pressVolumeUpKey()
   tvAdvancedRemote.pressVolumeUpKey()

   // The advanced remote has additional functionality
   tvAdvancedRemote.pressMuteKey()

   speakerSimpleRemote.pressVolumeDownKey()
   speakerAdvancedRemote.pressVolumeDownKey()

   speakerSimpleRemote.pressVolumeUpKey()
   speakerAdvancedRemote.pressVolumeUpKey()

   speakerAdvancedRemote.pressMuteKey()
}