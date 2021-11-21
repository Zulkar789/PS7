var MENU1_ITEMS =[
	[wrap_blue('Home'), '/member/home', {'sw':80}],
	
	[wrap_blue('Account'), null, {'sw':80, 'bw':195},
		['Edit Profil', '/member/edit-profile'],
		['Bonus Account Statement', '/member/bonus-account-statement'],		
		['Daftar Redemption', '/member/redemption-status'],
		['Auto Maintenance Statement', '/member/auto-maintenance-statement'],	
		['Registrasi Member Baru', '/member/register']
	],
	[wrap_blue('Bonus'), null, {'sw':80, 'bw':180},
		['Bonus Harian', '/member/bonus-daily'],
		['Bonus Mingguan', '/member/bonus-weekly'],
		['Bonus Bulanan', '/member/bonus-monthly'],		
	],
	[wrap_blue('Report'), null, {'sw':80, 'bw':210},
		['Susunan Jaringan (Genealogi)', '/member/genealogy'],
		['Laporan Tutup Poin', '/member/leadership-tree'],
		['Laporan Perkembangan Jaringan', '/member/network-performance-report'],
		['Laporan Pembelanjaan Pribadi', '/member/history-personal-sales'],
                ['Daftar Sponsor Langsung', '/member/list-direct-sponsor?list1=1'],
	],
	
	[wrap_blue('Utility'), null, { 'sw':80, 'bw':150},
		['Ganti Password', '/member/change-password'],
		['Download', '/member/download']
	],
	[wrap_blue('Sign Out'), '/member/logout', {'sw':80}]
];

function wrap_blue (text) {
	var res=[];
	for (var i=0; i<3; i++)
		res[i]=['<table cellpadding="0" cellspacing="0" border="0"><tr><td><img src="/resources/images/blue',
			(i?2:1),'_l.gif" width="8" height="21" border="0"></td><td background="/resources/images/blue',
			(i?2:1),'_m.gif" style="font-face: tahoma, verdana, arial; font-size: 11px; text-align:center; font-weight: bold; color: #ffffff" width="100%">',text,'</td><td><img src="/resources/images/blue',
			(i?2:1),'_r.gif" width="8" height="21" border="0"></td></tr></table>'
		].join('');
	return res;
}