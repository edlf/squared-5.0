module.exports = [{
  "type": "section",
  "items": [{
    "type": "heading",
    "defaultValue": "Squared Watchface config"
  }, {
    "type": "section",
    "items": [{
      "type": "heading",
      "defaultValue": "COLORS"
    }, {
      "type": "toggle",
      "messageKey": "monochrome",
      "label": "Monochrome"
    }, {
      "type": "toggle",
      "messageKey": "invert",
      "label": "Invert Colors"
    }],
    "capabilities": ["BW"]
  }, {
    "type": "section",
    "items": [{
      "type": "heading",
      "defaultValue": "COLORS"
    }, {
      "type": "radiogroup",
      "messageKey": "number_base_color",
      "label": "Numbers",
      "options": [{
        "label": "White",
        "value": 0
      }, {
        "label": "Diamond",
        "value": 0
      }, {
        "label": "Ruby",
        "value": 0
      }, {
        "label": "Fire",
        "value": 0
      }, {
        "label": "Forest",
        "value": 0
      }, {
        "label": "Quartz",
        "value": 0
      }, {
        "label": "Red",
        "value": 0
      }, {
        "label": "Green",
        "value": 0
      }, {
        "label": "Blue",
        "value": 0
      }, {
        "label": "Yellow",
        "value": 0
      }, {
        "label": "Cyan",
        "value": 0
      }, {
        "label": "Magenta",
        "value": 0
      }, {
        "label": "Violet",
        "value": 0
      }, {
        "label": "Orange",
        "value": 0
      }, {
        "label": "Vivid Cerulean",
        "value": 0
      }, {
        "label": "Chrome Yellow",
        "value": 0
      }, {
        "label": "Spring Green",
        "value": 0
      }, {
        "label": "Black",
        "value": 0
      }, {
        "label": "Dark Gray",
        "value": 0
      }, {
        "label": "Light Gray",
        "value": 0
      }]
    }, {
      "type": "radiogroup",
      "messageKey": "ornament_base_color",
      "label": "Ornaments",
      "options": [{
        "label": "Black",
        "value": 0
      }, {
        "label": "White",
        "value": 0
      }, {
        "label": "Dark Gray",
        "value": 0
      }, {
        "label": "Light Gray",
        "value": 0
      }, {
        "label": "Red",
        "value": 0
      }, {
        "label": "Green",
        "value": 0
      }, {
        "label": "Blue",
        "value": 0
      }, {
        "label": "Yellow",
        "value": 0
      }, {
        "label": "Cyan",
        "value": 0
      }, {
        "label": "Magenta",
        "value": 0
      }, {
        "label": "Violet",
        "value": 0
      }, {
        "label": "Orange",
        "value": 0
      }, {
        "label": "Vivid Cerulean",
        "value": 0
      }, {
        "label": "Chrome Yellow",
        "value": 0
      }, {
        "label": "Spring Green",
        "value": 0
      }]
    }, {
      "type": "radiogroup",
      "messageKey": "background_color",
      "label": "Background",
      "options": [{
        "label": "Black",
        "value": 0
      }, {
        "label": "White",
        "value": 0
      }, {
        "label": "Dark Gray",
        "value": 0
      }, {
        "label": "Light Gray",
        "value": 0
      }, {
        "label": "Red",
        "value": 0
      }, {
        "label": "Green",
        "value": 0
      }, {
        "label": "Blue",
        "value": 0
      }, {
        "label": "Yellow",
        "value": 0
      }, {
        "label": "Cyan",
        "value": 0
      }, {
        "label": "Magenta",
        "value": 0
      }, {
        "label": "Violet",
        "value": 0
      }, {
        "label": "Orange",
        "value": 0
      }, {
        "label": "Vivid Cerulean",
        "value": 0
      }, {
        "label": "Chrome Yellow",
        "value": 0
      }, {
        "label": "Spring Green",
        "value": 0
      }]
    }],
    "capabilities": ["COLOR"]
  }, {
    "type": "section",
    "items": [{
      "type": "heading",
      "defaultValue": "APPEARANCE"
    }, {
      "type": "toggle",
      "messageKey": "leading_zero",
      "label": "Leading Zeros"
    }, {
      "type": "toggle",
      "messageKey": "large_mode",
      "label": "Large Numbers"
    }]
  }, {
    "type": "section",
    "items": [{
      "type": "heading",
      "defaultValue": "BOTTOM ROW"
    }, {
      "type": "radiogroup",
      "messageKey": "bottomrow",
      "label": "Bottom Row Shows",
      "options": [{
        "label": "Date",
        "value": 0
      }, {
        "label": "Battery Level",
        "value": 1
      }, {
        "label": "Step Goal",
        "value": 2,
        "capabilities": ["HEALTH"]
      }, {
        "label": "Heart Rate",
        "value": 3,
        "capabilities": ["HEALTH"]
      }]
    }]
  }, {
    "type": "section",
    "items": [{
      "type": "heading",
      "defaultValue": "DATE"
    }, {
      "type": "toggle",
      "messageKey": "eu_date",
      "label": "European Date (dd/mm)"
    }, {
      "type": "toggle",
      "messageKey": "center",
      "label": "Ceneter-Align Date"
    }, {
      "type": "toggle",
      "messageKey": "weekday",
      "label": "Replace Month with Weekday"
    }]
  }, {
    "type": "section",
    "items": [{
      "type": "heading",
      "defaultValue": "WRIST FLICK"
    }, {
      "type": "radiogroup",
      "messageKey": "wristflick",
      "label": "Flick of the Wrist Shows",
      "options": [{
        "label": "Nothing",
        "value": 0
      }, {
        "label": "Battery Level",
        "value": 1
      }, {
        "label": "Step Goal",
        "value": 2,
        "capabilities": ["HEALTH"]
      }, {
        "label": "Heart Rate + Zone",
        "value": 3,
        "capabilities": ["HEALTH"]
      }, {
        "label": "Big Date",
        "value": 4
      }]
    }]
  }, {
    "type": "section",
    "items": [{
      "type": "heading",
      "defaultValue": "DAILY STEP GOAL"
    }, {
      "type": "text",
      "label": "Squared gets your steps from Pebble Health"
    }, {
      "type": "toggle",
      "messageKey": "dynamicstepgoal",
      "label": "Dynamic Step Goal"
    }, {
      "type": "slider",
      "messageKey": "stepgoal",
      "label": "Step Goal",
      "min": 1000,
      "max": 25000,
      "step": 1000,
      "defaultValue": 10000
    }, {
      "type": "toggle",
      "messageKey": "cheeky",
      "label": "Cheeky Quips & Encouragement"
    }],
    "capabilities": ["HEALTH"]
  }, {
    "type": "section",
    "items": [{
      "type": "heading",
      "defaultValue": "ANIMATION"
    }, {
      "type": "toggle",
      "messageKey": "quick_start",
      "label": "Quick Animations"
    }, {
      "type": "toggle",
      "messageKey": "nightsaver",
      "label": "Battery Saver"
    }]
  }, {
    "type": "section",
    "items": [{
      "type": "heading",
      "defaultValue": "BATTERY SAVER"
    }, {
      "type": "toggle",
      "messageKey": "ns_start",
      "label": "Stop Animations at"
    }, {
      "type": "toggle",
      "messageKey": "ns_stop",
      "label": "Continue Animations at"
    }]
  }, {
    "type": "section",
    "items": [{
      "type": "heading",
      "defaultValue": "ADVANCED"
    }, {
      "type": "toggle",
      "messageKey": "btvibe",
      "label": "Vibrate on Disconnect"
    }, {
      "type": "toggle",
      "messageKey": "contrast",
      "label": "High Contrast While Charging"
    }, {
      "type": "toggle",
      "messageKey": "backlight",
      "label": "Backlight on While Charging"
    }]
  }, {
    "type": "submit",
    "defaultValue": "SEND"
  }]
}]