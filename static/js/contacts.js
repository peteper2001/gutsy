/**
 * Add timeline to top of dashboard if event data is present.
 * The numbers indicate remaining days.
 * Red numbers indicate close deadlines.
 * Clicking on the numbers displays all event information.
 */
$(document).ready(function() {
  $(".contact-name").each(function() {
    var el = $(this);
    var toggle = el.prev();
    toggle.css("cursor", "pointer");
    toggle.css("padding", "5px");

    var info = el.next();
    if (!el.hasClass("on-call")) {
      info.hide();
    }
    info.css("padding", "5px");

    toggle.click(function() {
      var toggle = $(this);
      var info = toggle.next().next();
      info.toggle();
      if (info.css("display") === "none") {
        toggle.text("+");
      } else {
        toggle.text("-");
      }
    });
  });

  var contacts_plus = $("#contacts-plus");
  contacts_plus.css("cursor", "pointer");
  contacts_plus.css("padding", "5px");
  contacts_plus.click(function() {
    var contact = $(this).parent().next().children().children().children().children();
    var infos = contact.children("ul");
    var plus = contact.children(".plus");
    if ($(this).text() === "+") {
      infos.css("display", "block");
      plus.text("-");
      $(this).text("-");
    } else {
      infos.css("display", "none");
      plus.text("+");
      $(this).text("+");
    }
  });
});
