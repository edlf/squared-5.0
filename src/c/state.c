#include "state.h"

void state_init(State *state) {
  state->tile_size = 10;
  state->num_slots = NUM_SLOTS;

  state->spacing_x = state->tile_size;
  state->spacing_y = state->tile_size;

  state->font_width_blocks = 5;
  state->font_height_blocks = 5;
  state->total_blocks = state->font_width_blocks * state->font_height_blocks;

  state->font_width = state->font_width_blocks * state->tile_size;
  state->font_height = state->font_height_blocks * state->tile_size;

  state->tiles_x = state->font_width + state->spacing_x + state->font_width;
  state->tiles_y = state->font_height_blocks + state->spacing_y + state->font_height_blocks;

  #ifdef PBL_RECT
  state->origin_x = (144 - state->tiles_x) / 2;
  state->origin_y = state->tile_size * 1.5;
  #else
  state->origin_x = (180 - state->tiles_x) / 2;
  state->origin_y = state->tile_size * 2.2;
  #endif

  state->splashEnded = false;
  state->in_shake_mode = false;
  state->chargestate = false;
  state->contrastmode = false;
  state->allow_animate = true;
  state->initial_anim = false;
  state->animation_time = 2000;

  #ifdef PBL_COLOR
  state->previous_contrastmode = false;
  #endif

  #ifdef PBL_HEALTH
  state->stepgoal = 0;
  state->stepprogress = 0;
  state->heartrate = 0;
  #endif
}

void state_update(State* state, Preferences* preferences) {
  if (preferences->large_mode) {
    state->spacing_y = state->tile_size - 1;
  }

  #ifndef PBL_ROUND
  if(preferences->large_mode) {
    state->tile_size = 12;
  } else {
    state->tile_size = 10;
  }
  #endif


  #ifdef PBL_RECT
  state->origin_x = (144 - state->tiles_x) / 2;

  if (preferences->large_mode) {
    state->origin_y = 1;
  } else {
    state->origin_y = state->tile_size * 1.5;
  }

  #else
  state->origin_x = (180 - state->tiles_x) / 2;
  state->origin_y = state->tile_size * 2.2;
  #endif

  state->font_width = state->font_width_blocks * state->tile_size;
  state->font_height = state->font_height_blocks * state->tile_size;

  state->tiles_x = state->font_width + state->spacing_x + state->font_width;
  state->tiles_y = state->font_height_blocks + state->spacing_y + state->font_height_blocks;

  state->background_color = (GColor8) { .argb = preferences->background_color };

  #ifdef PBL_COLOR
  if (preferences->contrast == true && battery_state_service_peek().is_plugged) {
    state->contrastmode = true;
    state->previous_contrastmode = true;
    state->background_color = GColorBlack;
  } else {
    state->contrastmode = false;
    state->previous_contrastmode = false;
  }

  #else
  if (preferences->invert) {
    state->background_color = GColorWhite;
  } else {
    state->background_color = GColorBlack;
  }
  #endif

  if (preferences->quick_start) {
    state->animation_time = 1500;
  } else {
    state->animation_time = 2000;
  }
}
