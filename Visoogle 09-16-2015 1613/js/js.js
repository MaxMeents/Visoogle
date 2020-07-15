$(document).ready(function()
{
	$.fn.duplicate = function(count, cloneEvents)
	{
		var tmp = [];
		for (var i = 0; i < count; i++)
		{
			$.merge(tmp, this.clone(cloneEvents).get());
		}
		return this.pushStack(tmp);
	};

	function numOfObjKeys(obj)
	{
		var count = 0;
		for (var i in obj)
			if (obj.hasOwnProperty(i))
				count++;

		return count;
	}
	function con(num, digits) {
    var units = [
      'Th', 'Mi', 'Bi', 'Tr', 
      'KT', 'MT', 'BT', 'TT', 
      'a', 'Ka', 'Ma', 'Ba', 'Ta', 
      'b', 'Kb', 'Mb', 'Bb', 'Tb', 
      'c', 'Kc', 'Mc', 'Bc', 'Tc', 
      'd', 'Kd', 'Md', 'Bd', 'Td', 
      'e', 'Ke', 'Me', 'Be', 'Te', 
      'f', 'Kf', 'Mf', 'Bf', 'Tf', 
      'g', 'Kg', 'Mg', 'Bg', 'Tg', 
      'h', 'Kh', 'Mh', 'Bh', 'Th', 
      'i', 'Ki', 'Mi', 'Bi', 'Ti', 
      'j', 'Kj', 'Mj', 'Bj', 'Tj', 
      'k', 'Kk', 'Mk', 'Bk', 'Tk', 
      'l', 'Kl', 'Ml', 'Bl', 'Tl', 
      'm', 'Km', 'Mm', 'Bm', 'Tm', 
      'n', 'Kn', 'Mn', 'Bn', 'Tn', 
      'o', 'Ko', 'Mo', 'Bo', 'To', 
      'p', 'Kp', 'Mp', 'Bp', 'Tp', 
      'q', 'Kq', 'Mq', 'Bq', 'Tq', 
      'r', 'Kr', 'Mr', 'Br', 'Tr', 
      's', 'Ks', 'Ms', 'END'],
        decimal;

    for(var i=units.length-1; i>=0; i--) {
        decimal = Math.pow(1000, i+1);

        if(num <= -decimal || num >= decimal) {
            return +(num / decimal).toFixed(digits) + ' '+ units[i];
        }
    }

    return num;
}

	function ran(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
	newObjt = 1;
	Movies = {
		Acts:
		{
			Info:
			{
				Company1:
				{
					http: '',
					img: '',
					pos: 1,
					func: function() {}
				},
				Company2:
				{
					http: '',
					img: '',
					pos: 2,
					func: function() {}
				},
				Company3:
				{
					http: '',
					img: '',
					pos: 3,
					func: function() {}
				},
				Company4:
				{
					http: '',
					img: '',
					pos: 4,
					func: function() {}
				},
				Company5:
				{
					http: '',
					img: '',
					pos: 5,
					func: function() {}
				},
				Company6:
				{
					http: '',
					img: '',
					pos: 6,
					func: function() {}
				},
				Company7:
				{
					http: '',
					img: '',
					pos: 7,
					func: function() {}
				},
				Company8:
				{
					http: '',
					img: '',
					pos: 8,
					func: function() {}
				},
				Company9:
				{
					http: '',
					img: '',
					pos: 9,
					func: function() {}
				},
				Company10:
				{
					http: '',
					img: '',
					pos: 10,
					func: function() {}
				},

			}, //end of Info
			Buy:
			{
				Amazon:
				{
					http: 'Amazon.com',
					img: 'http://s1.postimg.org/h860mxji7/amazon_logo_RGB.jpg',
					pos: 6,
					func: function(CoverName)
					{
						window.open('http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Dmovies-tv&field-keywords=' + CoverName, '_blank')
					}

				},
				Ebay:
				{
					http: 'ebay.com',
					img: 'http://i.imgur.com/Uvu9lmt.png',
					pos: 6,
					func: function(CoverName)
					{
						window.open('http://www.ebay.com/sch/DVDs-Movies-/11232/i.html?_from=R40&LH_BIN=1&_nkw=' + CoverName + '&_sop=15', '_blank')
					}
				},
				Walmart:
				{
					http: 'walmart.com',
					img: 'http://i.imgur.com/Wa4tyKG.png',
					pos: 1,
					func: function(CoverName)
					{
						window.open('https://www.google.com/#hl=en&safe=off&sclient=psy-ab&q=site:walmart.com ' + CoverName + '&oq=net', '_blank')
					}
				},

				Target:
				{
					http: 'target.com',
					img: 'http://i.imgur.com/qmsmu71.png',
					pos: 3,
					func: function(CoverName)
					{
						window.open('https://www.google.com/#hl=en&safe=off&sclient=psy-ab&q=site:target.com ' + CoverName + '&oq=net', '_blank')
					}
				},

				Company5:
				{
					http: '',
					img: '',
					pos: 5,
					func: function() {}
				},
				Company6:
				{
					http: '',
					img: '',
					pos: 6,
					func: function() {}
				},
				Company7:
				{
					http: '',
					img: '',
					pos: 7,
					func: function() {}
				},
				Company8:
				{
					http: '',
					img: '',
					pos: 8,
					func: function() {}
				},
				Company9:
				{
					http: '',
					img: '',
					pos: 9,
					func: function() {}
				},
				Company10:
				{
					http: '',
					img: '',
					pos: 10,
					func: function() {}
				},
			}, //End of Buy
			Torrent:
			{
				'The Pirate Bay':
				{
					http: 'thepiratebay.se',
					img: 'http://i.imgur.com/bNvvwKz.png',
					pos: 1,
					func: function(CoverName)
					{
						window.open('https://thepiratebay.mn/search/' + CoverName + '', '_blank')
					}
				},
				Isohunt:
				{
					http: 'isohunt.com',
					img: 'http://i.imgur.com/ypIz1o0.png',
					pos: 3,
					func: function() {}
				},
				'Kickass Torrents':
				{
					http: 'kat.ph',
					img: 'http://i.imgur.com/tsajohA.png',
					pos: 2,
					func: function() {}
				},
				Mininova:
				{
					http: 'mininova.org',
					img: 'http://i.imgur.com/W7UoHgr.png',
					pos: 5,
					func: function() {}
				},

				Company5:
				{
					http: '',
					img: '',
					pos: 5,
					func: function() {}
				},
				Company6:
				{
					http: '',
					img: '',
					pos: 6,
					func: function() {}
				},
				Company7:
				{
					http: '',
					img: '',
					pos: 7,
					func: function() {}
				},
				Company8:
				{
					http: '',
					img: '',
					pos: 8,
					func: function() {}
				},
				Company9:
				{
					http: '',
					img: '',
					pos: 9,
					func: function() {}
				},
				Company10:
				{
					http: '',
					img: '',
					pos: 10,
					func: function() {}
				},
			}, //End of Torrent
			Review:
			{
				IMDB:
				{
					http: 'imdb.com',
					img: 'http://i.imgur.com/l16074p.png',
					pos: 1,
					func: function(CoverName)
					{
						window.open('http://www.imdb.com/find?q=' + CoverName + '&s=all', '_blank')
					}
				},
				'Rotten Tomatoes':
				{
					http: '',
					img: 'http://i.imgur.com/CND2ReK.png',
					pos: 2,
					func: function(CoverName)
					{
						window.open('http://www.rottentomatoes.com/search/?search=' + CoverName + '&sitesearch=rt', '_blank')
					}
				},
				Company3:
				{
					http: '',
					img: '',
					pos: 3,
					func: function() {}
				},
				Company4:
				{
					http: '',
					img: '',
					pos: 4,
					func: function() {}
				},
				Company5:
				{
					http: '',
					img: '',
					pos: 5,
					func: function() {}
				},
				Company6:
				{
					http: '',
					img: '',
					pos: 6,
					func: function() {}
				},
				Company7:
				{
					http: '',
					img: '',
					pos: 7,
					func: function() {}
				},
				Company8:
				{
					http: '',
					img: '',
					pos: 8,
					func: function() {}
				},
				Company9:
				{
					http: '',
					img: '',
					pos: 9,
					func: function() {}
				},
				Company10:
				{
					http: '',
					img: '',
					pos: 10,
					func: function() {}
				},
			}, //end of Review
			Rent:
			{
				Redbox:
				{
					http: 'redbox.com',
					img: 'http://i.imgur.com/5fy4HkY.png',
					pos: 1,
					func: function(CoverName)
					{
						window.open('http://www.redbox.com/search/?q=' + CoverName, '_blank')
					}
				},
				Blockbuster:
				{
					http: 'blockbuster.com',
					img: 'http://i.imgur.com/CUI0z1D.png',
					pos: 2,
					func: function(CoverName)
					{
						window.open('http://www.blockbuster.com/search/product/products?keyword=' + CoverName, '_blank')
					}
				},
				Netflix:
				{
					http: 'netflix.com',
					img: 'http://i.imgur.com/nP7Lirm.png',
					pos: 3,
					func: function(CoverName)
					{
						window.open('https://www.google.com/#hl=en&safe=off&sclient=psy-ab&q=site:netflix.com ' + CoverName + '&oq=net', '_blank')
					}
				},
				Company4:
				{
					http: '',
					img: '',
					pos: 4,
					func: function() {}
				},
				Company5:
				{
					http: '',
					img: '',
					pos: 5,
					func: function() {}
				},
				Company6:
				{
					http: '',
					img: '',
					pos: 6,
					func: function() {}
				},
				Company7:
				{
					http: '',
					img: '',
					pos: 7,
					func: function() {}
				},
				Company8:
				{
					http: '',
					img: '',
					pos: 8,
					func: function() {}
				},
				Company9:
				{
					http: '',
					img: '',
					pos: 9,
					func: function() {}
				},
				Company10:
				{
					http: '',
					img: '',
					pos: 10,
					func: function() {}
				},

			}, //end of Rent


			Stream:
			{
				Company1:
				{
					http: '',
					img: '',
					pos: 1,
					func: function() {}
				},
				Company2:
				{
					http: '',
					img: '',
					pos: 2,
					func: function() {}
				},
				Company3:
				{
					http: '',
					img: '',
					pos: 3,
					func: function() {}
				},
				Company4:
				{
					http: '',
					img: '',
					pos: 4,
					func: function() {}
				},
				Company5:
				{
					http: '',
					img: '',
					pos: 5,
					func: function() {}
				},
				Company6:
				{
					http: '',
					img: '',
					pos: 6,
					func: function() {}
				},
				Company7:
				{
					http: '',
					img: '',
					pos: 7,
					func: function() {}
				},
				Company8:
				{
					http: '',
					img: '',
					pos: 8,
					func: function() {}
				},
				Company9:
				{
					http: '',
					img: '',
					pos: 9,
					func: function() {}
				},
				Company10:
				{
					http: '',
					img: '',
					pos: 10,
					func: function() {}
				},

			}, //End of Stream
			//End of Torrent

			Forum:
			{
				'Warez BB':
				{
					http: 'warez-bb.org',
					img: 'http://i.imgur.com/3Ml4AzP.png',
					pos: 1,
					func: function() {}
				},
				'Teh Paradox':
				{
					http: 'tehparadox.com',
					img: 'http://i.imgur.com/2ygjRl8.png',
					pos: 2,
					func: function() {}
				},

				Company3:
				{
					http: '',
					img: '',
					pos: 3,
					func: function() {}
				},
				Company4:
				{
					http: '',
					img: '',
					pos: 4,
					func: function() {}
				},
				Company5:
				{
					http: '',
					img: '',
					pos: 5,
					func: function() {}
				},
				Company6:
				{
					http: '',
					img: '',
					pos: 6,
					func: function() {}
				},
				Company7:
				{
					http: '',
					img: '',
					pos: 7,
					func: function() {}
				},
				Company8:
				{
					http: '',
					img: '',
					pos: 8,
					func: function() {}
				},
				Company9:
				{
					http: '',
					img: '',
					pos: 9,
					func: function() {}
				},
				Company10:
				{
					http: '',
					img: '',
					pos: 10,
					func: function() {}
				},


			}, //End of Forum	
			Tickets:
			{
				Company1:
				{
					http: '',
					img: '',
					pos: 1,
					func: function() {}
				},
				Company2:
				{
					http: '',
					img: '',
					pos: 2,
					func: function() {}
				},
				Company3:
				{
					http: '',
					img: '',
					pos: 3,
					func: function() {}
				},
				Company4:
				{
					http: '',
					img: '',
					pos: 4,
					func: function() {}
				},
				Company5:
				{
					http: '',
					img: '',
					pos: 5,
					func: function() {}
				},
				Company6:
				{
					http: '',
					img: '',
					pos: 6,
					func: function() {}
				},
				Company7:
				{
					http: '',
					img: '',
					pos: 7,
					func: function() {}
				},
				Company8:
				{
					http: '',
					img: '',
					pos: 8,
					func: function() {}
				},
				Company9:
				{
					http: '',
					img: '',
					pos: 9,
					func: function() {}
				},
				Company10:
				{
					http: '',
					img: '',
					pos: 10,
					func: function() {}
				},

			}, //end of Tickets
			Preview:
			{
				Youtube:
				{
					http: 'youtube.com',
					img: 'http://s29.postimg.org/mhk6vlbk7/You_Tube_logo_full_color.png',
					pos: 1,
					func: function(CoverName)
					{
						window.open('https://www.google.com/#hl=en&safe=off&sclient=psy-ab&q=site:youtube.com ' + CoverName + ' Movie Trailer&oq=net', '_blank')
					}
				},
				Company2:
				{
					http: '',
					img: '',
					pos: 2,
					func: function() {}
				},
				Company3:
				{
					http: '',
					img: '',
					pos: 3,
					func: function() {}
				},
				Company4:
				{
					http: '',
					img: '',
					pos: 4,
					func: function() {}
				},
				Company5:
				{
					http: '',
					img: '',
					pos: 5,
					func: function() {}
				},
				Company6:
				{
					http: '',
					img: '',
					pos: 6,
					func: function() {}
				},
				Company7:
				{
					http: '',
					img: '',
					pos: 7,
					func: function() {}
				},
				Company8:
				{
					http: '',
					img: '',
					pos: 8,
					func: function() {}
				},
				Company9:
				{
					http: '',
					img: '',
					pos: 9,
					func: function() {}
				},
				Company10:
				{
					http: '',
					img: '',
					pos: 10,
					func: function() {}
				},

			}, //end of Tickets
		} // End of Acts
	}; //End of obj		//Non-Static Content

	ActNames = ['Buy', 'Rent', 'Review', 'Tickets', 'Torrent', 'Forum', 'Post', 'Preview'];
	NumOfActs = numOfObjKeys(Movies.Acts),
		ActImgURLs = ['http://i.imgur.com/MADTKmb.png', 'http://i.imgur.com/0QumpBV.png', 'http://i.imgur.com/Uvu9lmt.png', 'http://i.imgur.com/MnEAYBP.png', 'http://i.imgur.com/Vewx29L.png', 'http://i.imgur.com/qmsmu71.png', 'http://i.imgur.com/o4gfXjk.png', 'http://i.imgur.com/Wa4tyKG.png', 'http://i.imgur.com/Wa4tyKG.png', 'http://i.imgur.com/MADTKmb.png', 'http://i.imgur.com/0QumpBV.png', 'http://i.imgur.com/Wa4tyKG.png', 'http://i.imgur.com/Uvu9lmt.png', 'http://i.imgur.com/MnEAYBP.png', 'http://i.imgur.com/Vewx29L.png', 'http://i.imgur.com/qmsmu71.png', 'http://i.imgur.com/o4gfXjk.png', 'http://i.imgur.com/Wa4tyKG.png', 'http://i.imgur.com/Wa4tyKG.png', 'http://i.imgur.com/Wa4tyKG.png'];
	Acts = [];
	Companys = [];
	CompanyImgs = [];
	Companyfuncs = [];
	for (Act in Movies.Acts)
	{
		Acts.push(Act)
	}
	for (i = 0; i < NumOfActs; i++)
	{
		for (Company in Movies.Acts[Acts[i]])
		{
			Companys.push(Company)
			CompanyImgs.push(Movies.Acts[Acts[i]][Company].img)
			Companyfuncs.push(Movies.Acts[Acts[i]][Company].func)
		}
	}
		$Obj = $('.Obj');
		$Obj = $Obj.empty()
		$Objf = $Obj
		$Objd = $Obj
		skip = true;
	function resize(s)
	{
		$Objd
		$Obj = $('.Obj')
		$Obj.each(function(i, val){ 
			if($(val).hasClass('resized')){
				$Objd = $Objd.add(val)
				
			}else{
				$Objf = $Objf.add(val)
				
			}
		});
		if(!$Objf && skip == true){return }
		
		px = 'px',
			ObjW = 300 * s,
			ObjH = 400 * s,
			ObjImgW = ObjW * 0.6,
			ObjImgH = ObjH * 0.7,
			ObjImgT = (ObjH - ObjImgH) / 2,
			ObjImgL = (ObjW - ObjImgW) / 2,
			TitleT = ObjImgH + ObjImgT,
			TitleFS = 25 * s,
			ActN = NumOfActs,
			ActW = ObjImgW,
			ActH = ObjH / ActN,
			ActLH = ActH,
			ActFS = ActH - 10, //Edit later
			ActImgS = 10 * s,
			ActImgW = ObjW - ObjImgW - ActImgS * 2,
			ActImgH = (ObjH - (4 * ActImgS)) / 5,
			ActsW = ObjImgW,
			ActsH = ActN * ActH,
			ActsT = (ObjH - ActsH) / 2,
			ActsL = ObjImgL,
			ObjLeaveW = ObjImgW + ActImgW * 2 + ActImgS * 4,
			ObjLeaveH = ObjH,
			ObjLeaveL = -ObjImgL,
			Pos = -(ActImgW + ActImgS),
			Pos1T = 0;
		Pos2T = 0;
		Pos3T = ActImgH + ActImgS;
		Pos4T = ActImgH + ActImgS;
		Pos5T = (ActImgH + ActImgS) * 2;
		Pos6T = (ActImgH + ActImgS) * 2;
		Pos7T = (ActImgH + ActImgS) * 3;
		Pos8T = (ActImgH + ActImgS) * 3;
		Pos9T = (ActImgH + ActImgS) * 4;
		Pos10T = (ActImgH + ActImgS) * 4;

		
		$Objf
			.css(
			{
				width: ObjW + px,
				height: ObjH + px
			}).addClass('resized');

		$Objf.find('.ObjImg')
			.css(
			{
				width: ObjImgW + px,
				height: ObjImgH + px,
				top: ObjImgT,
				left: ObjImgL
			});
		$Objf.find('.ObjImg img')
			.css(
			{
				width: ObjImgW + px,
				height: ObjImgH + px
			});
		$Objf.find('.ObjLeave')
			.css(
			{
				width: ObjLeaveW + px,
				height: ObjLeaveH + px,
				left: ObjLeaveL + px
			});
		$Objf.find('.Acts')
			.css(
			{
				width: ActsW + px,
				height: ActsH + px,
				top: ActsT + px,
				left: ActsL + px
			});
		$Objf.find('.Act')
			.css(
			{
				width: ActW + px,
				height: ActH + px,
				'line-height': ActLH + px,
				'font-size': ActFS + px
			});
		$Objf.find('.ActImg, .ActImg img')
			.css(
			{
				width: ActImgW,
				height: ActImgH
			});
		$Objf.find('.pos1,.pos3,.pos5,.pos7,.pos9').css(
		{
			left: Pos
		});
		$Objf.find('.pos2,.pos4,.pos6,.pos8,.pos10').css(
		{
			right: Pos
		});
		$Objf.find('.pos1').css(
		{
			top: Pos1T
		});
		$Objf.find('.pos2').css(
		{
			top: Pos2T
		});
		$Objf.find('.pos3').css(
		{
			top: Pos3T
		});
		$Objf.find('.pos4').css(
		{
			top: Pos4T
		});
		$Objf.find('.pos5').css(
		{
			top: Pos5T
		});
		$Objf.find('.pos6').css(
		{
			top: Pos6T
		});
		$Objf.find('.pos7').css(
		{
			top: Pos7T
		});
		$Objf.find('.pos8').css(
		{
			top: Pos8T
		});
		$Objf.find('.pos9').css(
		{
			top: Pos9T
		});
		$Objf.find('.pos10').css(
		{
			top: Pos10T
		});

		$Objf.find('.Title').css(
		{
			'width': ObjImgW,
			'left': ObjImgL,
			'top': TitleT,
			'font-size': TitleFS + px
		});

	}
cnarr = []
	function newObj(CoverName, CoverURL, NumOfActs, ActNameArr, ActImgURLArr)
	{
		var found = $.inArray(CoverName, cnarr) > -1;
		if(found){return}
		cnarr.push(CoverName)
		var Obj = $('<div>',
			{
				class: 'Obj'
			}),
			ObjImg = $('<div>',
			{
				class: 'ObjImg'
			}),
			Acts = $('<div>',
			{
				class: 'Acts'
			}),
			Act = $('<div>',
			{
				class: 'Act'
			}),
			ActP = $('<p>',
			{
				text: 'Test'
			}),
			ActImgs = $('<div>',
			{
				class: 'ActImgs'
			}),
			ActImgDiv = $('<div>',
			{
				class: 'ActImg'
			});
		Cover = $('<img>',
		{
			src: CoverURL
		});
		Act = $(Act).append(ActP).duplicate(NumOfActs);
		ActImg = $('<img>',
		{
			src: 'http://i.imgur.com/MADTKmb.png'
		});
		ActImg = $(ActImgDiv).append(ActImg).duplicate(10);
		ObjLeave = $('<div>',
		{
			class: 'ObjLeave'
		});
		Title = $('<div>',
		{
			class: 'Title'
		});
		Obj = $(Obj)
			.append(ObjImg)
			.children()
			.append(Cover)
			.end() //End of .ObjImg img
			.append(Title)
			.find('.Title')
			.text(CoverName).css(
			{
				opacity: 0
			})
			.end()
			.append(Acts)
			.find('.Acts')
			.append(Act) //represents all .Act & .Act p
			.find('.Act')
			.append(ActImgs)
			.find('.ActImgs')
			.append(ActImg)
			.end() //End of ActImgs
			.end() //End of Act
			.end() //End of Acts
			.append(ObjLeave);


		//Add Obj Specific Properties
		$(Obj).find('.Act p')
			.each(function(i)
			{
				$(this).text(ActNameArr[i])
			});

		$(Obj).find('.ActImg')
			.each(function(i, v)
			{
				if (i == 0)
				{
					posNum_i = 0;
				}
				if (i == 0)
				{
					URLi = -1
				}
				if (posNum_i == 10)
				{
					posNum_i = 0
				}
				URLi++
				posNum_i++
				$(this).addClass('pos' + posNum_i);
				$(this).children()
					.attr('src', ActImgURLArr[URLi]);

				$(this).children().wrapAll('<a />')
				$(this).children().click(function()
				{
					Companyfuncs[i](CoverName)
				})
			})
		$(Obj).appendTo('.AllObjs');
		newObjt++
	}

	function Reload()
	{
		
		//setup for Obj functions
		var $AllObjs = $('.AllObjs'),
			$Obj = $('.Obj:not(.loaded)'),
			$ObjImg = $Obj.find('.ObjImg'),
			$Acts = $Obj.find('.Acts'),
			$Act = $Obj.find('.Act'),
			$Act_p = $Act.find('p'),
			blue = 'rgb(0, 110, 245)';
		//changes z-index of focused obj to 2 and then back to 1
			
$Obj.addClass('loaded') //oh yeah! that speeded things up
		$ObjImg.mouseenter(function()
		{

			$(this)
				.parent()
				.css(
				{
					'z-index': 2
				})
				.find('.Acts')
				.show()
				.find('.ActImg').css(
				{
					opacity: 1
				})
		});
		$Obj.mouseleave(function()
			{
				$(this).css(
				{
					'z-index': 1
				})
				$Acts.fadeOut().find('.ActImg').css(
				{
					opacity: 1
				})
			})
			//
		$Acts.mouseleave(function()
		{
			/* doesn't do anything although should hide none clicked on Action Images
				something else must be doing it
			$Acts
				.find('.ActImg')
				.hide()
			*/
			$(this)
				.find('.Clicked')
				.find('.ActImg')
				.show().css(
				{
					'opacity': .7
				}).each(function()
				{
					$('.ActImg').hover(function()
					{
						$(this).css(
						{
							opacity: 1
						})
					}, function()
					{
						$(this).css(
						{
							opacity: .7
						})
					})
				});

		});

		$Act.click(function()
		{
			//selcts Action Name
			var clicked = $(this).find('p').text();
			//remove class Clicked from previous clicked Action
			//change color back to original
			$Act
				.removeClass('Clicked')
				.parent()
				.find('.Act p')
				.css(
				{
					'color': 'black',
					'background': 'white',
					'opacity': .7
				});

			//select action containing clicked name
			$Acts
				.find('.Act p:contains(' + clicked + ')')
				.css(
				{
					'background': 'rgb(255, 127, 0)',
					'opacity': 1,
					'color': 'white'
				})
				.parent()
				.addClass('Clicked');


		});
		$Act_p.hover(function()
		{

			if ($(this).parent().hasClass('Clicked'))
			{
				return;
			}

			$(this)
				.css(
				{
					'opacity': 1,
					'color': 'white'
				})
				.css(
				{
					backgroundColor: 'blue'
				})



		}, function()
		{

			if ($(this).parent().hasClass('Clicked'))
			{
				return;
			}
			$(this)
				.stop()
				.css(
				{
					'color': 'black',
					'background': 'white',
					opacity: .7
				});
		});




		//hide all Action Images

		$Act.hover(function()
		{

			$(this)
				.parent()
				.find('.ActImg') //Hide all Obj ActImgs
				.hide()
				.end()
				.end()
				.find('.ActImg') //Show only hovered ActImgs
				.show()
			$('.ActImgs').css(
			{
				opacity: 1
			})


		}, function()
		{

			$(this)
				.find('.ActImg')
				.hide();
		});
		$('img').filter(function(index)
		{
			return $(this).attr('src') === '';
		}).addClass('delete')
		$('.delete').parent().parent('.ActImg').remove()
		$('img:not([src])').delete

	}
/*













*/

	var url = 'http://api.themoviedb.org/3/',
		mode = 'discover/movie',
		input,
		movieName,
		key = '?api_key=dba2f4b2ae824df340ed8d878033b683';

	var url = 'http://api.themoviedb.org/3/',
		mode = 'search/movie',
		mode = 'discover/movie',
		input,
		movieName,
		adult = '&include_adult=true',
		votea = '&sort_by=vote_average.desc',
		params = '&certification_country=US&vote_count.gte=500&certification=R&sort_by=vote_average.desc',
		rating = '&certification_country=US&certification=R',
		minvc = '&vote_count.gte=500',
		date = '&primary_release_date.gte=1980-01-01&primary_release_date.lte=2015-09-15',
		pop = '&sort_by=popularity.desc',
		doc = '&with_genres=99',
		ani = '&with_genres=16',
		wes = '&with_genres=37',
		params = '&vote_count.gte=100' + rating+pop+date,
		pagenum = 1,
		page = '&page=' + pagenum,
		key = '?api_key=dba2f4b2ae824df340ed8d878033b683',
		url = url + mode + key + page + params;
c = new Date() 
d = new Date() 
inp = true;
c.setSeconds(c.getSeconds() + 1);
	$(window).scroll(function()
	{
		if ($(window).scrollTop() + $(window).height() > $(document).height() - 100)
		{
			if(inp == true){return}
			
			inp = true;
		    //d = new Date() 
			//d.setSeconds(d.getSeconds() + 2)
			pagenum++
			page = '&page=' + pagenum,
				url = url + mode + key + page + params;
			//c = new Date();
			gjson(url)
			
		}
	});
	j = ''
	function gjson(url)
	{

		$.getJSON(url, function(json)
		{
			
			if(j == json){return}
			j = json;
			$('.loading,.BG').toggle()
			ln = (j.results.length * ran(1E6,2E6));
			ra = 0
			ra = ln/j.results.length;
			raa = 0;
			raa += ra+ra
			myLoop();

		});
arrt = [];
		var i = 0; //  set your counter to 1

		function myLoop()
		{
			
			if (j.results.length < 1)
			{
				return $('.loading,.BG').toggle()
			}
			setTimeout(function()
			{ 
				
				r = j.results[i]
				arrt.push(r.title)
				$('.loading').text('Page ' + pagenum + ' - ' + con(raa,2) + ' out of ' + con(ln,2) + ' units').attr('title', "Units of ENERGY aka Computer Processing Power - from trillions to millions, effiecent looping is important")
				src = 'https://image.tmdb.org/t/p/w185' + r.poster_path;
				newObj(encodeURIComponent(r.title), src, NumOfActs, Acts, CompanyImgs);
				raa += ra


				i++; 
				if (i < j.results.length)
				{
					myLoop(); 
				}
				else
				{
					
					while($('.Obj').length > 500)
					{
						$('.Obj').slice(0, 1).remove()
						//console.log($('.Obj').length)
					};
/*
					$('html, body').animate(
					{
						scrollTop: 0
					}, 0);
*/					resize(1);
					Reload();
					h = $(document).height()
					$(document.body).css({height:h+200+'px'})
					//$(document).height($(document).height()+ 600+'px')
					$('.loading').text('Page ' + pagenum + ' - ' + con(ln, 2) + ' of ' + con(ln,2) + ' units')
					$('.loading,.BG').toggle();
					inp = false;
				} //  ..  setTimeout()
			}, 10)
		}
	}
	gjson(url)



	/*
	$('.NextPage').click(function(){
		if($('.AllObjs').children().html()){$('.AllObjs').empty()}
			
		
	pagenum++
	page = '&page='+pagenum
	$.ajax({
				
	            url: url + mode + key + page + params,//'&query='+movieName ,
	            dataType: 'jsonp',
	             
	            success: function(data) {
	            //console.log(data)
	             $.each( data.results, function(i){

	             	
	              	src = 'https://image.tmdb.org/t/p/w185' + this.poster_path;
	              	newObj(encodeURIComponent(this.title), src, NumOfActs, Acts, CompanyImgs);
	              })
	            // $('<img>', {src:img} ).appendTo(document.body)
	             Reload()
	             resize(1)
	            }
	            
	        });

	    });
	$('.PrevPage').click(function(){
		if($('.AllObjs').children().html()){$('.AllObjs').empty()}
		pagenum--
		page = '&page='+pagenum
		$.ajax({
	            url: url + mode + key + page + params,//'&query='+movieName ,
	            dataType: 'jsonp',
	            success: function(data) {
	            //console.log(data)
	             $.each( data.results, function(){
	              	src = 'https://image.tmdb.org/t/p/w185' + this.poster_path;
	              	newObj(encodeURIComponent(this.title), src, NumOfActs, Acts, CompanyImgs);
	              })
	            // $('<img>', {src:img} ).appendTo(document.body)
	             Reload()
	             resize(1)
	            }
	            
	        });
	})

	Reload()
	resize(1)
	*/



});