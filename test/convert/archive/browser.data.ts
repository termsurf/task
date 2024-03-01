import { base64ToArrayBuffer } from '~/code/tool/shared/buffer'

export const TEST_TAR = new Blob([
  base64ToArrayBuffer(
    `LmdpdGlnbm9yZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAxMDA3NzcAMDAwMDAwMAAwMDAwMDAwADAwMDAwMDAwMDE1ADEzMzIzNjY2MjAxADAxMDAwMgAgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1c3RhcgAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAudnNjb2RlCi5pZGVhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGFkZG9uLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDQwNzc3ADAwMDAwMDAAMDAwMDAwMAAwMDAwMDAwMDAwMAAxMzM2MDM0NjY1MAAwMDcxMDcAIDUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdXN0YXIAMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYWRkb24vYWRkb24ucHkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAxMDA3NzcAMDAwMDAwMAAwMDAwMDAwADAwMDAwMDEwNjYzADEzMzIzNjY2MjAxADAxMDU1MAAgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1c3RhcgAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpbXBvcnQgc2ltcGxlanNvbiBhcyBqc29uCmZyb20gaHR0cGxpYjIgaW1wb3J0IEh0dHAKaW1wb3J0IHJlCmltcG9ydCB1cmxsaWIyCmltcG9ydCBzeXMKaW1wb3J0IHVybGxpYgppbXBvcnQgdXJscGFyc2UKaW1wb3J0IHhibWMKaW1wb3J0IHhibWNndWkKaW1wb3J0IHhibWNwbHVnaW4KCkFQSV9CQVNFID0gJ2h0dHA6Ly9uZXQuYWRqYXJhLmNvbS8nClNUQVRJQ19GSUxFUyA9ICdodHRwOi8vc3RhdGljbmV0LmFkamFyYS5jb20vJwpDQVRFR09SWV9NQVAgPSB7CiAgICAnbmV3X3JlbGVhc2UnOiAnU2VhcmNoL1NlYXJjaFJlc3VsdHM/YWpheD0xJmRpc3BsYXk9MTUmc3RhcnRZZWFyPTE5MDAmZW5kWWVhcj0yMDE4Jm9mZnNldD0wJm9yZGVyQnk9ZGF0ZSZvcmRlciU1Qm9yZGVyJTVEPWRhdGEmb3JkZXIlNUJkYXRhJTVEPXByZW1pZXJlJm9yZGVyJTVCbWV0YSU1RD1kZXNjJywKICAgICd0b3BfbW92aWVzJzogJ1NlYXJjaC9TZWFyY2hSZXN1bHRzP2FqYXg9MSZkaXNwbGF5PTE1JnN0YXJ0WWVhcj0xOTAwJmVuZFllYXI9MjAxOCZvZmZzZXQ9MTUmb3JkZXJCeT1kYXRlJm9yZGVyJTVCb3JkZXIlNUQ9ZGF0YSZvcmRlciU1QmRhdGElNUQ9dmlld3Mmb3JkZXIlNUJtZXRhJTVEPXZpZXdzLXdlZWsnCn0KCmJhc2VfdXJsID0gc3lzLmFyZ3ZbMF0KYWRkb25faGFuZGxlID0gaW50KHN5cy5hcmd2WzFdKQphcmdzID0gdXJscGFyc2UucGFyc2VfcXMoc3lzLmFyZ3ZbMl1bMTpdKQpmaW5kX3Zhcl9yZWdleCA9IHJlLmNvbXBpbGUociIiIm1vdmllVXJsRW1wdHlccyo9XHMqW1wnXCJdKC4rKVtcJ1wiXSIiIikKCnhibWNwbHVnaW4uc2V0Q29udGVudChhZGRvbl9oYW5kbGUsICdtb3ZpZXMnKQoKZGVmIGdldF9pY29uKG1vdmllX2lkKToKICAgIG1vdmllX2lkID0gc3RyKG1vdmllX2lkKQogICAgcmV0dXJuIFNUQVRJQ19GSUxFUyArICdtb3ZpZWNvbnRlbnQvJXMvY292ZXJzLzE1N3gyMzYtJXMuanBnJyAlIChtb3ZpZV9pZCxtb3ZpZV9pZCkKZGVmIGdldF9jb3Zlcihtb3ZpZV9pZCk6CiAgICBtb3ZpZV9pZCA9IHN0cihtb3ZpZV9pZCkKICAgIHJldHVybiBTVEFUSUNfRklMRVMgKyAnbW92aWVjb250ZW50LyVzL2NvdmVycy8xOTIweDEwODAtJXMuanBnJyAlIChtb3ZpZV9pZCxtb3ZpZV9pZCkKCmRlZiBidWlsZF91cmwocXVlcnkpOgogICAgcmV0dXJuIGJhc2VfdXJsICsgJz8nICsgdXJsbGliLnVybGVuY29kZShxdWVyeSkKCmRlZiBhZGRfY2F0ZWdvcnkobGFiZWwsY2F0ZWdvcnksaWNvbkltYWdlID0gJ0RlZmF1bHRGb2xkZXIucG5nJywgdXJsID0gTm9uZSk6CiAgICBpZiB1cmwgaXMgTm9uZToKICAgICAgICB1cmwgPSBidWlsZF91cmwoeydtb2RlJzogJ2NhdGVnb3J5JywgJ2NhdGVnb3J5JzogY2F0ZWdvcnl9KQogICAgbGkgPSB4Ym1jZ3VpLkxpc3RJdGVtKGxhYmVsLCBpY29uSW1hZ2U9aWNvbkltYWdlKQogICAgeGJtY3BsdWdpbi5hZGREaXJlY3RvcnlJdGVtKGhhbmRsZT1hZGRvbl9oYW5kbGUsIHVybD11cmwsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGl0ZW09bGksIGlzRm9sZGVyPVRydWUpCgpkZWYgbWFpbl9zY3JlZW4oKToKICAgIGFkZF9jYXRlZ29yeSgnU2VhcmNoJyxOb25lLCdEZWZhdWx0QWRkb25zU2VhcmNoLnBuZycsYnVpbGRfdXJsKHsnbW9kZSc6ICdzZWFyY2gnfSkpCiAgICBhZGRfY2F0ZWdvcnkoJ05ldyBSZWxlYXNlcycsJ25ld19yZWxlYXNlJykKICAgIGFkZF9jYXRlZ29yeSgnVG9wIE1vdmllcycsJ3RvcF9tb3ZpZXMnKQogICAgeGJtY3BsdWdpbi5lbmRPZkRpcmVjdG9yeShhZGRvbl9oYW5kbGUpCgpkZWYgbG9hZF9jYXRlZ29yeShjYXRlZ29yeSk6CiAgICBjYXRfdXJsID0gQVBJX0JBU0UgKyBDQVRFR09SWV9NQVBbY2F0ZWdvcnldCiAgICB0cnk6CiAgICAgICAgKHJzcF9oZWFkZXJzLCBqc29uX2RhdGEpID0gSHR0cCgpLnJlcXVlc3QoY2F0X3VybCkKICAgICAgICBkYXRhICA9IGpzb24ubG9hZHMoanNvbl9kYXRhKQogICAgICAgIGZvciBpdGVtIGluIGRhdGFbJ2RhdGEnXToKICAgICAgICAgICAgdXJsID0gYnVpbGRfdXJsKHsnbW9kZSc6ICdtb3ZpZScsICdpZCc6IGl0ZW1bJ2lkJ119KQogICAgICAgICAgICBsaSA9IHhibWNndWkuTGlzdEl0ZW0oaXRlbVsndGl0bGVfZW4nXSwgaWNvbkltYWdlPWl0ZW1bJ3Bvc3RlciddKQogICAgICAgICAgICBsaS5zZXRQcm9wZXJ0eSgnSXNQbGF5YWJsZScsICd0cnVlJykKICAgICAgICAgICAgeGJtY3BsdWdpbi5hZGREaXJlY3RvcnlJdGVtKGhhbmRsZT1hZGRvbl9oYW5kbGUsIHVybD11cmwsIGxpc3RpdGVtPWxpLCBpc0ZvbGRlcj1GYWxzZSkKCiAgICBleGNlcHQgRXhjZXB0aW9uLCBlOgogICAgICAgIHhibWMubG9nKCdhZGphcmFuZXQ6IGdvdCBodHRwIGVycm9yIGZldGNoaW5nICVzIFxuICVzJyAlIChjYXRfdXJsLCBzdHIoZSkpLCB4Ym1jLkxPR1dBUk5JTkcpCiAgICBmaW5hbGx5OgogICAgICAgIHhibWNwbHVnaW4uZW5kT2ZEaXJlY3RvcnkoYWRkb25faGFuZGxlKQoKZGVmIHNlYXJjaCgpOgogICAga2IgPSB4Ym1jLktleWJvYXJkKCcnLCAnU2VhcmNoIGZvciBtb3ZpZScpCiAgICBrYi5kb01vZGFsKCkKICAgIGlmIChrYi5pc0NvbmZpcm1lZCgpKToKICAgICAgICBzZWFyY2hfdGVybSA9IGtiLmdldFRleHQoKQogICAgZWxzZToKICAgICAgICByZXR1cm4KCiAgICBzZWFyY2hfdXJsID0gQVBJX0JBU0UgKyAnSG9tZS9xdWlja19zZWFyY2g/YWpheD0xJnNlYXJjaD0nICsgc2VhcmNoX3Rlcm0KICAgIHRyeToKICAgICAgICAocnNwX2hlYWRlcnMsIGpzb25fZGF0YSkgPSBIdHRwKCkucmVxdWVzdChzZWFyY2hfdXJsKQogICAgICAgIGRhdGEgID0ganNvbi5sb2Fkcyhqc29uX2RhdGEpCiAgICAgICAgZm9yIGl0ZW0gaW4gZGF0YVsnbW92aWVzJ11bJ2RhdGEnXToKICAgICAgICAgICAgdXJsID0gYnVpbGRfdXJsKHsnbW9kZSc6ICdtb3ZpZScsICdpZCc6IGl0ZW1bJ2lkJ119KQogICAgICAgICAgICBsaSA9IHhibWNndWkuTGlzdEl0ZW0oaXRlbVsndGl0bGVfZW4nXSkKICAgICAgICAgICAgbGkuc2V0QXJ0KHsKICAgICAgICAgICAgICAgICdpY29uJzogZ2V0X2ljb24oaXRlbVsnaWQnXSksCiAgICAgICAgICAgICAgICAnbGFuZHNjYXBlJzogZ2V0X2NvdmVyKGl0ZW1bJ2lkJ10pCiAgICAgICAgICAgIH0pCiAgICAgICAgICAgIGxpLnNldFByb3BlcnR5KCdJc1BsYXlhYmxlJywgJ3RydWUnKQogICAgICAgICAgICB4Ym1jcGx1Z2luLmFkZERpcmVjdG9yeUl0ZW0oaGFuZGxlPWFkZG9uX2hhbmRsZSwgdXJsPXVybCwgbGlzdGl0ZW09bGksIGlzRm9sZGVyPUZhbHNlKQogICAgZXhjZXB0IEV4Y2VwdGlvbiwgZToKICAgICAgICB4Ym1jLmxvZygnYWRqYXJhbmV0OiBnb3QgaHR0cCBlcnJvciBmZXRjaGluZyAlcyBcbiAlcycgJSAoc2VhcmNoX3VybCwgc3RyKGUpKSwgeGJtYy5MT0dXQVJOSU5HKQogICAgZmluYWxseToKICAgICAgICB4Ym1jcGx1Z2luLmVuZE9mRGlyZWN0b3J5KGFkZG9uX2hhbmRsZSkKCgpkZWYgbG9hZF9tb3ZpZShtb3ZpZV9pZCk6CiAgICBzY3JpcHRfdXJsID0gQVBJX0JBU0UgKyAnTW92aWUvbWFpbj9pZD0nKyBtb3ZpZV9pZCArJyZqcz0xJwogICAgdHJ5OgogICAgICAgIChyc3BfaGVhZGVycywgaHRtbF9kYXRhKSA9IEh0dHAoKS5yZXF1ZXN0KHNjcmlwdF91cmwpCiAgICAgICAgbWF0Y2ggPSByZS5zZWFyY2goZmluZF92YXJfcmVnZXgsaHRtbF9kYXRhKQogICAgICAgIGlmIG5vdCBtYXRjaDoKICAgICAgICAgICAgeGJtYy5sb2coJ2NhbiBub3QgZmluZCB1cmwgYXQgJXMnICUgKHNjcmlwdF91cmwpLCB4Ym1jLkxPR1dBUk5JTkcpCiAgICAgICAgICAgIHJhaXNlIEV4Y2VwdGlvbigndXJsIG5vdCBmb3VuZCcpCiAgICAgICAgCiAgICAgICAgdXJsID0gbWF0Y2guZ3JvdXAoMSkucmVwbGFjZSgne2xhbmd9JywnRW5nbGlzaCcpLnJlcGxhY2UoJ3txdWFsaXR5fScsJzE1MDAnKQogICAgICAgIHhibWMubG9nKHVybCwgeGJtYy5MT0dXQVJOSU5HKQogICAgICAgIAogICAgICAgIHBsYXlfaXRlbSA9IHhibWNndWkuTGlzdEl0ZW0ocGF0aD11cmwpCiAgICAgICAgeGJtY3BsdWdpbi5zZXRSZXNvbHZlZFVybChhZGRvbl9oYW5kbGUsIFRydWUsIGxpc3RpdGVtPXBsYXlfaXRlbSkKICAgIGV4Y2VwdCBFeGNlcHRpb24sIGU6CiAgICAgICAgeGJtYy5sb2coJ2FkamFyYW5ldDogZ290IGh0dHAgZXJyb3IgZmV0Y2hpbmcgJXMgXG4gJXMnICUgKHNjcmlwdF91cmwsIHN0cihlKSksIHhibWMuTE9HV0FSTklORykKCm1vZGUgPSBhcmdzLmdldCgnbW9kZScsIE5vbmUpCgppZiBtb2RlIGlzIE5vbmU6CiAgICBtYWluX3NjcmVlbigpCmVsaWYgbW9kZVswXSA9PSAnY2F0ZWdvcnknOgogICAgY2F0ZWdvcnkgPSBhcmdzLmdldCgnY2F0ZWdvcnknLCduZXdfcmVsZWFzZScpCiAgICBsb2FkX2NhdGVnb3J5KGNhdGVnb3J5WzBdKQplbGlmIG1vZGVbMF0gPT0gJ3NlYXJjaCc6CiAgICBzZWFyY2goKQplbGlmIG1vZGVbMF0gPT0gJ21vdmllJzoKICAgIG1vdmllX2lkID0gYXJncy5nZXQoJ2lkJywgTm9uZSkKICAgIGxvYWRfbW92aWUobW92aWVfaWRbMF0pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhZGRvbi9hZGRvbi54bWwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDEwMDc3NwAwMDAwMDAwADAwMDAwMDAAMDAwMDAwMDIwMTEAMTMzMjM2NjYyMDEAMDEwNzA0ACAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHVzdGFyADAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO+7vzw/eG1sIHZlcnNpb249IjEuMCIgZW5jb2Rpbmc9IlVURi04IiBzdGFuZGFsb25lPSJ5ZXMiPz4KPGFkZG9uIGlkPSJwbHVnaW4uYWRkb24uYWRqYXJhbmV0LmNsaWVudCIgbmFtZT0iYWRqYXJhbmV0IGNsaWVudCIgdmVyc2lvbj0iMC4wLjEiIHByb3ZpZGVyLW5hbWU9IllvdSI+CiAgPHJlcXVpcmVzPgogICAgPGltcG9ydCBhZGRvbj0ieGJtYy5weXRob24iIHZlcnNpb249IjIuMS4wIi8+CiAgICA8aW1wb3J0IGFkZG9uPSJzY3JpcHQubW9kdWxlLnNpbXBsZWpzb24iIC8+CiAgICA8aW1wb3J0IGFkZG9uPSJzY3JpcHQubW9kdWxlLmh0dHBsaWIyIiAvPgogIDwvcmVxdWlyZXM+CiAgPGV4dGVuc2lvbiBwb2ludD0ieGJtYy5weXRob24ucGx1Z2luc291cmNlIiBsaWJyYXJ5PSJhZGRvbi5weSI+CiAgICA8cHJvdmlkZXM+dmlkZW88L3Byb3ZpZGVzPgogIDwvZXh0ZW5zaW9uPgogIDxleHRlbnNpb24gcG9pbnQ9InhibWMuYWRkb24ubWV0YWRhdGEiPgogICAgPHN1bW1hcnkgbGFuZz0iZW5fR0IiPkFkamFyYW5ldC5jb20gY2xpZW50PC9zdW1tYXJ5PgogICAgPGRlc2NyaXB0aW9uIGxhbmc9ImVuX0dCIj5lbmFibGUgYWRqYXJhbmV0IGluc2lkZSBrb2RpPC9kZXNjcmlwdGlvbj4KICAgIDxkaXNjbGFpbWVyIGxhbmc9ImVuX0dCIj48L2Rpc2NsYWltZXI+CiAgICA8bGFuZ3VhZ2U+PC9sYW5ndWFnZT4KICAgIDxwbGF0Zm9ybT5hbGw8L3BsYXRmb3JtPgogICAgPGxpY2Vuc2U+PC9saWNlbnNlPgogICAgPGZvcnVtPjwvZm9ydW0+CiAgICA8d2Vic2l0ZT48L3dlYnNpdGU+CiAgICA8ZW1haWw+PC9lbWFpbD4KICAgIDxzb3VyY2U+PC9zb3VyY2U+CiAgICA8bmV3cz48L25ld3M+CiAgICA8YXNzZXRzPgogICAgICAgIDxpY29uPjwvaWNvbj4KICAgICAgICA8ZmFuYXJ0PjwvZmFuYXJ0PgogICAgICAgIDxiYW5uZXI+PC9iYW5uZXI+CiAgICAgICAgPGNsZWFybG9nbz48L2NsZWFybG9nbz4KICAgICAgICA8c2NyZWVuc2hvdD48L3NjcmVlbnNob3Q+CiAgICA8L2Fzc2V0cz4KICA8L2V4dGVuc2lvbj4KPC9hZGRvbj4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFJFQURNRS5tZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMTAwNzc3ADAwMDAwMDAAMDAwMDAwMAAwMDAwMDAwMDAzNAAxMzMyMzY2NjIwMQAwMDcyNzIAIDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdXN0YXIAMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIyBBZGphcmFuZXQgcGx1Z2luIGZvciBLb2RpCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
  ),
])