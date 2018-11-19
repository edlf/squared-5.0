#ifndef PREFERENCES_H
#define PREFERENCES_H

#include <pebble.h>
#include "utils.h"
#include "resources.h"

#define PREFERENCES_KEY 0

typedef struct {
    // true == MM/DD, false == DD/MM
    bool    eu_date;
    // true == replaces leading Zero for hour, day, month with a "cycler"
    bool    leading_zero;

    uint8_t background_color;
    uint8_t number_base_color;
    uint8_t ornament_base_color;

    bool    center;
    bool    btvibe;
    bool    nightsaver;
    uint8_t ns_start;
    uint8_t ns_stop;
    bool    backlight;
    bool    weekday;
    uint8_t wristflick;
} Preferences;

enum {
    KEY_EU_DATE,
    KEY_LEADING_ZERO,
    KEY_BACKGROUND_COLOR,
    KEY_NUMBER_BASE_COLOR,
    KEY_ORNAMENT_BASE_COLOR,
    KEY_CENTER,
    KEY_BTVIBE,
    KEY_NIGHTSAVER,
    KEY_NS_START,
    KEY_NS_STOP,
    KEY_BACKLIGHT,
    KEY_WEEKDAY,
    KEY_WRISTFLICK
};

void preferences_set_defaults(Preferences*);
void preferences_load(DictionaryIterator*, Preferences*);

#endif /* end of include guard: PREFERENCES_H */
