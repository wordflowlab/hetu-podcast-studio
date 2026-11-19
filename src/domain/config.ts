export const config = {
  "fields": {
    "recording": "recordings",
    "cue": "cues",
    "section": "sections",
    "edition": "editions",
    "note": "notes"
  },
  "defaults": {
    "brief": "",
    "recordings": [],
    "cues": [],
    "sections": [],
    "editions": [],
    "notes": []
  },
  "tabs": [
    "单集阅读",
    "录音与选段",
    "编排与试听",
    "听审与复核",
    "播客交付"
  ]
} as const;
