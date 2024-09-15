document.querySelectorAll('.type').forEach(typeElement => {
    const img = typeElement.querySelector('img');
    const text = typeElement.querySelector('.textc');

    typeElement.addEventListener('mouseover', () => {
      const src = img.getAttribute('src');
      img.setAttribute('src', src.replace('blue', 'white'));
      text.style.color = 'white';
    });

    typeElement.addEventListener('mouseout', () => {
      const src = img.getAttribute('src');
      img.setAttribute('src', src.replace('white', 'blue'));
      text.style.color = 'rgb(28, 89, 150)';
    });
  });

  $("input[name = 'city']").change(function() {
    var selected = $("input[name = 'city']:checked").val();
    console.log(selected);

    if(selected === "two") {
        $(".ret").css("display","block");
        $(".retvr").css("display","block");
    }
    else {
        $(".ret").css("display","none");
        $(".retvr").css("display","none");
    }
  });

  function validateForm() {
    var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (document.getElementById("floatingName").value === "") {
      alert("Please enter name!");
      return false;
    }
    else if (document.getElementById("floatingEmail").value === "") {
      alert("Please enter email!");
      return false;
    }
    else if (!document.getElementById("floatingEmail").value.match(validRegex)) {
      alert("Incorrect email format!");
      return false;
    }
    else if (document.getElementById("floatingMessage").value === "") {
      alert("Please enter a message!");
      return false;
    }
    else {
      alert("Submitted! Thank you for your message!");
      $(".contactform").trigger("reset");
    }
  }

  $(".indcard").mouseenter(function() {
    $(this).find(".vid").css("display", "block");
    $(this).find("img").css("display", "none");
    var video = $(this).find('video').get(0);
    video.play();
  })

  $(".indcard").mouseleave(function() {
    var video = $(this).find('video').get(0);
    video.pause();
    video.currentTime = 0;
    $(".vid").css("display", "none");
    $("img").css("display", "block");
  })

  $(".heart").click(function() {
    var source = $(this).text();
    if (source == "♡") {
      $(this).text("♥︎");
      $(this).siblings(".hovertext-heart").text("Unlike").css("right","28px");
    }
    else {
      $(this).text("♡");
      $(this).siblings(".hovertext-heart").text("Like").css("right","34px");
    }
  })

  $(".heart").mouseenter(function() {
    $(this).siblings(".hovertext-heart").show();
  })

  $(".heart").mouseleave(function() {
    $(this).siblings(".hovertext-heart").hide();
  })

  $(".share").mouseenter(function() {
    $(this).siblings(".hovertext-share").show();
  })

  $(".share").mouseleave(function() {
    $(this).siblings(".hovertext-share").hide();
  })