var months = [ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December" ];
var updateFreq = 15; // in seconds
var clickCount= 0;

$( document ).ready(function() {
	update();
	window.setInterval(function(){
		update();
	}, updateFreq * 1000); //updates every 2 seconds

	$( "#myButton" ).click(function() {

		if (clickCount == 0){
			$('.btn-info').css('background-color','#5cb85c');
			var t = '<textarea>';
			$('.btn-info').html('Submitted');
			$('#subMess').attr("placeholder","[display user submitted text]");
			$('#subMess').val('');
			console.log("clicks: " + clickCount);
			clickCount = clickCount + 1;
		} else{
			var mess = $('#subMess').text();
			if (true){
				console.log("clicks: " + clickCount);
				clickCount = clickCount + 1;
				$('#subMess').val('');
				$('#subMess').attr("placeholder","[display user resubmitted text]");
			}
		}

		$('#my_form').keydown(function() {
			var key = e.which;
			if (key == 13) {

		$('#my_form').submit(); {} // Submit form code
		//
	}
});
	});


});

function update() {

	clickCount = 0;
	$('.btn-info').html('Submit');
	$('.btn-info').css('background-color','#5bc0de');
	$('#subMess').attr("placeholder","submit text to be randomly selected every ten minutes");
	var day = (new Date).getDate();
	var month = (new Date).getMonth();
	var year = (new Date).getFullYear();

	
	var hours = (new Date).getHours();

	if (hours == 12 || hours == 0 || hours == 24){
		hours = 12;
	} else {
		hours = hours % 12;
	}
	var minutes = (new Date).getMinutes();
	if (minutes < 10){
		minutes = "0" + minutes;
	}

	var fullDate = months[month] + " " + day + ", " + year;
	var fullTime = hours + ":" + minutes;

	console.log(fullDate);
	console.log(fullTime);
	$("#myDate").html(fullDate);
	$("#myTime").html(fullTime);

}



// Find Inner Serenity by Making it Easier to Find Your Keys. For most people, getting control of clutter brings a greater sense of calm and decreased frustration.
// Surround Yourself With Progress. When you complete a list of action steps, your instinct might be to throw the list away. After all, the work is completed! However, some creative professional teams take a different approach; they relish their progress. Some go so far as surrounding themselves with it.
// Empty Your Inbox in 30 Seconds. Is your inbox filled with thousands and thousands of unread messages? Before you give up hope, there’s an instant way to clear your inbox of old emails in less than 30 seconds.
// Instantly Build Self Confidence. These tips will get you riding high in no time.
// Reduce Your Trash To Almost Zero. Follow the No Impact Man experiment to reduce our trash as close as we can to zero.
// Feel like a million bucks for cheap. Feel healthier and more energized right away without spending a fortune.
// End Laundry Chaos. More than 20 tips to help you keep your laundry chaos to a minimum.
// Learn the Secrets of the Super-Organized. A few simple habits keep clutter and chaos at bay.
// Check Email Once a Day … or Once a Week. Simple tips that will reduce interruption and increase your productivity.
// Become an Early Riser. 10 benefits of rising early, and some practical tips on how to do it.
// Learn Lessons from Google About Self-Image. How you think of yourself greatly affects how successful you can be. Google has got self-image down to a science.
// Make a Good First Impression. Research shows that people decide what kind of relationship they want with you in the first ten minutes of a meeting, so making a good first impression really matters.
// Know the Hype Behind Bottled Water. Have you ever stopped to think about just how incredibly odd it is to buy bottled water?
// Leave Work at Work. Want more time for your family or personal life? Here’s how not to think about your job 24/7.
// Create a Landing Strip to Become Organized. We come from work exhausted, often carrying our work bags, groceries, and the mail. A landing strip will help you avoid disorganization from the time you get home.
// Understand Time to Increase Return on Investment. Time is your most valuable resource. Understanding these ideas will help you make optimal decisions.
// Give Your RÈsumÈ a Face Lift. Even if you can’t hire a fancy designer and are stuck with Microsoft Word, a few tweaks can turn your blasÈ rÈsumÈ into an elegant and functional showpiece.
// Boost Your Energy Level. Feeling energetic is a key to happiness and to self-esteem, so take steps to keep your energy high.
// Actually Execute Your To-Do List. Many productivity systems will tell you how to organize your tasks, but what happens if you don’t feel like doing them?
// Keep Your Desk Clean and Tidy. Do you spend waste more and more time looking for lost items instead of being the brilliant creative person that you are? Here’s how to get your desk clean, clutter-free, and keep it that way for good.
// Learn the Truth About Baby Carrots. Baby carrots not really young carrots! They are also less nutritious and less flavorful than regular carrots.
// Try Quick and (Almost) Painless Ways to Kill Distractions. Are you spending more time dealing with emails, IMs, phone calls, and random stray files than actually working? Here are ten actions you can do right now to kill distractions and get back to work.
// Reduce Your Carbon Emissions. The most important lifestyle changes you can make to reduce your carbon emissions are listed here.
// Put the Action Method Into Practice. After a couple years of studying how creative people stay organized, we developed a simple and easily customized method for managing projects. A good portion of 2006 was spent putting the Action Method into practice.
// Gently End Procrastination. Need an easy way to remind you when you should be working and when you should be playing? Try using teaming up Flextime with Growl. Here’s how.
// Get the Most Out of Your RSS Reader. Seven simple tips for getting your feeds under control.
// Use Catchphrases to Change the Way You Think. By keeping certain ideas active and accessible through review and repetition ñ whether itís ìSay yes,î ìFake it ëtill you feel it,î or ìPeople succeed in groupsî ñ you can shape the way you think.
// Photograph Your Mementos to Free Up Clutter. Taking digital photos of your mementos can get rid of clutter, free-up storage space, and provide you with a simple way to walk down memory lane.
// Save Trees With Ease. Want to avoid all the paper towels, paper napkins and other tree-killing stuff there’s no need to use? Read here.
// Organize Your Cluttered Desktop and Regain Your Sanity. Is your desktop littered with zillions of random files and folders often litter my desktop. Learn how 5 ordinary folders can keep your desktop immaculate.
// Eat Slower. Why eating slower is better for your health, your sanity, your digestion, and more.
// Maximize Your Lunch Hour. Your lunch hour should be the least “productive” moment in your day. If it lasts a mere 20 minutes-or just doesn’t exist anymore-here’s how to turn it around and make it joyful.
// Increase Workplace Productivity by Not Being a Jerk. You get more flies with honey, as the saying goes. This is a brief outline for how to work and play well with your coworkers (and get more done).
// Find Cheap Gas Instantly. If soaring gas prices are draining your wallet dry, here’s five ways to find cheap(er) gas anywhere.
// Find Your Purpose. We’re all searching for our purpose. It seems tempting that having it appear by divine intervention would be great. Maybe not.
// Make a GTD System for about $20. Putting together a functional GTD system for the price of a week’s worth of Starbucks.
// Avoid costly DIY mistakes. You can end up costing yourself more in the long run if you don’t watch out for these mistakes.
// Think About Whether You Can Afford NOT to Pursue Your Dreams. Pursuing dreams is crucial, even when it means taking a hit or entering financial uncertainty.
// Plan for Success. Waiting for your ship to come in is a waste of time.
// Improve Your Mind by Reading the Classics. How to use the wisdom of the classics to become a better writer, thinker, and speaker.
// Break Habits of Highly Ineffective Emailing. A list of what not to do when emailing, avoiding these habits will take you a long way toward better, more productive email.
// Make Your PDA Green. If you’re worried about e-waste and the toxins produced by burying and burning old cell phones and PDAs, you may want to try my green hipster’s pda.
// Learn to Go From Solo to Successful Collaboration. Self-starters are often successful doing everything themselves. However, when forced to grow beyond the one gal/guy-show, many creative professionals are unable to take the leap from a solo success to a successful collaboration.
// Create a Morning Routine. Developing a routine in the morning could lead to greater sanity and happiness, and achieving your goals.
// Learn How to Survive a Road Trip. Road trips always begin on a high note, but by the end even Mother Teresa would be willing to shove her grandmother out of the car. Here are 9 tips to help keep you sane and happy on any road trip.
// Share To Make Ideas Happen. The philosophy to “share ideas liberally” defies the age-old instinct to keep ideas secret. However, the creative person’s tendency to jump from idea-to-idea-to-idea causes most ideas to die in isolation. Creative professionals should take every opportunity to communicate new ideas broadly, seek feedback, and develop a sense of accountability.
// Use Space Under Stairs for More Storage. Very cool under-stair storage where each step is a drawer.
// Know What’s In Store If You Have a Toddler. New parents often wonder what’s in store for them once their kid is able to move around on their own. Here’s what you can expect.
// Work in Multiple Positives. These hyper-productive activities will benefit you in multiple ways at once.
// Use a Super Slim Wallet. It’s time to shrink down that backbreaking Constanza wallet. Here are 8 ways to radically slim down your wallet.
// Advertise Action to Yourself. We live in a world of choices. When we buy, we have to make a choice between varieties, brands, and sizes. Similarly, when we work we have to decide what to focus on and how to use our time. While prioritization helps us focus, our minds still have the tendency to wander. We are most likely to focus on whatever catches our eye. Along the lines of “out of sight, out of mind” we learn that “right before our eyes, actions thrive.”
// Gain Muscle in Minimal Time. How Tim Ferriss gained 34 pounds of muscle in 4 weeks.
// Choose Living Over Sleeping Sometimes. Despite the importance of healthy sleep habits, there are times when it’s good to throw caution to the wind and invest in your life in other ways.
// Make Reference Items Helpful. We spend too much time discussing, storing, and organizing notes. References are only valuable if you refer to them. Even with a well-organized system for managing references (either digital or paper), how often do we actually use them? How do we make reference items helpful?
// Eat Sustainably. If you are interested in how to eat sustainably, read about it here.
// Lose Weight Without Exercise. How to lose 20 lbs. of fat in 30 days with a sensible diet.
// Find Calm & Sanity Through the Environment. If you’ve ever thought a more environmental life might also be a calmer, saner life, you’re right.
// Learn About the Successfully Self-Employed. Is freelancing for suckers? Are you already an expert? This series explores the levels of the free-agent — and how to understand what each one means.
// Learn GTD the Easy Way. An online primer of all the chapters of Getting Things Done.
// Set Goals So You Actually Accomplish Them. Setting goals is hard. Following through is even harder. Using a framework that builds on your personal view of the world can make the process easier. This series helps outline how.
// Reduce Gamer Clutter. If you are a gamer, these are a number of suggestions to help you keep your entertainment system under control and the gaming clutter to a minimum.
// Stick to a Schedule of Regular Exercise. Exercising regularly boosts moodóright awayóand also makes it easier to sleep, keeps your weight down, and gives you energy.
// Cut Back on Computer Cables. Follow these 8 simple steps to get rid of the birds’ nest of cables behind your computer.
// Pay the Price to Be an Entrepreneur. The price of access can be steep, but once you’re flying down the road — it’s well worth it.
// Single-task. Increase your productivity by learning not to multi-task.
// Get Outside Your Comfort Zone. Comfort isn’t all it’s cracked up to be.
// Drop Ideas That Fail. Ideas are a commodity. Being able to execute them well is what creates success. Hanging on to an idea, even after it his proven to be ineffective is the downfall of many aspiring entrepreneurs.
// Learn to Calculate Risk. Risk and reward go hand-in-hand. Knowing what to expect can help reduce risk and shape your reality.
// Don’t Settle for Just One Path. Variety is the spice of life. So why do you have to be just one thing when you grow up?
// Get Rid of Paper Clutter. A four-part series dedicated to reducing the paper clutter in your home.
// Set Up Action Areas. Boxes need to be mailed, errands need to be run, cookies need to be eaten, orders need to be fulfilled, but by whom? Whoever has a chance! The Behance team got tired of limiting our action steps to just an area on paper – why not make “action areas” out of physical space?
// Find Hidden Clutter. Ten places to start looking for hidden clutter in your home.
// Get a Promotion. 20 tips that landed the writer an IT promotion — most could be used in any field.
// Dispose of Old Electronics. The best ways to dispose of old electronics.
// Increase Your Intelligence. A list of 5 simple activities that will boost your brain power.
// Present Yourself. Creative achievements seldom happen in isolation. A big part of making ideas happen is controlling how you come across to others. Of course, the Creative’s tendency is to say, “who gives a crap what other people think.” While there is merit in never compromising oneself for the sake of another’s opinion, creative professionals need to make an effort to be understood. You need to present yourself effectively to engage others and get the support (and the business) you need to push ideas forward.
// Follow George Orwell’s Rules for Effective Writing. Becoming a better writer will create better career opportunities and increase productivity.
// Lay Your Energy Line. Creative teams juggle multiple projects at once. The constant streams of ideas lead to more ideas. As energy is spread across projects like peanut butter, prioritization is all but lost. Energy Lines are a simple way to prioritize and use design to guide creative energy.
// Focus on Continuous Improvement. By mastering the optimization mentality you can become an expert in your chosen field.
// Motivate Yourself. This post will teach you to recognize the primary motivation killers and how to beat them.
// Become a More Light-hearted Parent. We all want a peaceful, happy atmosphere at home ñ and you canít nag and yell your way there.
// Give Up Nagging. Itís no fun to nag, and itís no fun to be nagged. Give your relationship a lift by putting an end to the irritating nag cycle.
// Learn to Sacrifice Temporary Pressure for Long-term Goals. All success requires sacrifice. Do you have the determination to endure temporary punishment to reach your dreams?
// Learn the GTD Workflow. An excellent into to GTD for the novice, a great refresher for the experienced.
// Use the Power of 10 Minutes. 10 Minutes can be even more productive amount of time than 50 minutes, if used properly.
// Triple Your Workout Effectiveness. Do you exercise regularly but don’t get the results you want? Here are some simple but powerful ways to boost that workout.
// Work 8 Hours Straight Without Hating Yourself. There is an art to taking breaks that can help you work longer, and more productively.
// Learn Whether You’re Waking Up at the Wrong Time. Everyone’s internal clock can tell us when we should be working. Are you listening to it?
// Reduce Wasted Plastic Cups and Bottles. If you want to toss fewer plastic cups and bottles in the trash, you may be interested this ultra-cool reusable cup and water bottle.
// Avoid Entrepreneurial Burnout: Fill Your Tank. Many times entrepreneurs suffer from going too hard with their vision, without thinking about keeping the work pace sustainable.
// Take Steps to Boost Your Happiness in the Next Hour. You can make yourself happier ñ and this doesnít have to be a long-term ambition. You can start right now.
// Learn to Capture Ideas and How to Manage Diarrhea of the Brain. Sometimes our best ideas come at the worst possible times. These tips will help to make sure none of those precious ideas fall through the cracks.
// Know the Signs That a Pink Slip is Coming. If you can answer yes to THREE or more of these questions, you may want to think about sprucing up your resume and dry-cleaning your best interview attire.
// Try No TV. In an extreme experiment to reduce waste to near zero, No Impact Man turned turned off electricity, which means no TV. Read about how to entertain a little girl with no TV.
// Accelerate Your Mortgage Payments to Save a Bundle. See how much money you can save by adding just a few extra dollars a month to the principal.
// Put Your Daily To-Do List On a Post-It. If it won’t fit on a post-it, it won’t fit in your day.
// Use Money to Buy Happiness. Some of the best things in life arenít free, so spend money in ways to bring you more happiness bang for your buck.
// Save the Lives of Animals With One Change. If you want to help save the lives of hundreds of thousands of animals just by not using plastic bags, perhaps the easiest environmental step, read here.
// Get the Most Out of Your Rebates. Follow these tips and we can all fight the Man and wrench our hard-earned money back from those big, faceless corporations.
// Eliminate All But the Absolute Essential Tasks. Is your to-do list overwhelming you? Here’s how to simplify it to the core tasks.
