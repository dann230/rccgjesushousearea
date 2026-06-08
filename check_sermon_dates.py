import re
from datetime import datetime, timedelta
from collections import Counter

with open('sermons.html', encoding='utf-8') as f:
    text = f.read()

results = {}
current_year = None
for line in text.splitlines():
    m = re.match(r'^(\s*)(2025|2026): \{$', line)
    if m:
        current_year = m.group(2)
        continue
    if current_year and 'date:' in line:
        m = re.search(r'"([A-Za-z]+ \d{1,2}, \d{4})', line)
        if m:
            results.setdefault(current_year, []).append(m.group(1))

for year in ['2025', '2026']:
    dates = results.get(year, [])
    print(f'YEAR {year} total entries {len(dates)}')
    print(Counter(datetime.strptime(d, '%B %d, %Y').month for d in dates))

    d = datetime(int(year), 1, 1)
    while d.weekday() != 6:
        d += timedelta(days=1)
    sundays = []
    while d.year == int(year):
        sundays.append(d.strftime('%B %d, %Y'))
        d += timedelta(days=7)
    print('actual sundays', len(sundays), Counter(datetime.strptime(s, '%B %d, %Y').month for s in sundays))
    print('first 5', sundays[:5])
    print('last 5', sundays[-5:])
    print('---')
