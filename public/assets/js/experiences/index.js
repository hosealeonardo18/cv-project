const experienceBody = document.getElementById("section_experience");
const educationBody = document.getElementById("section_education");

document.addEventListener("DOMContentLoaded", async () => {
  const getDataExperince = await fetchData("/result/experiences");
  embedElementExperience(getDataExperince, section_experience);

  const getDataEducation = await fetchData("/result/educations");
  embedElementEducation(getDataEducation, educationBody);
});

async function fetchData(url) {
  const fetching = await fetch(url);
  const res = await fetching.json();

  return res;
}

function embedElementEducation(data, element = null) {
  let elmnt = "";
  element.innerHTML = "";

  if (!data.error) {
    const res = data?.data;

    if (res?.length > 0) {
      res?.map((item) => {
        elmnt += `
          <div class="resume-item">
              <h4 class="fw-bolder">${item?.school_name}</h4>
              <span class="fw-bolder fst-italic">${item?.major}</span>
              <div class="">
                  <p class="fst-italic" style="font-size: 0.85rem; color:grey">${
                    item?.start_date
                  } - ${item?.end_date}.</p>
              </div>
      
              <ul class="mt-3">
                ${item?.descriptions
                  .map((desc) => `<li>${desc?.desc}</li>`)
                  .join(" ")}
              </ul>
          </div>
        `;
      });
    }
  }

  element.innerHTML = elmnt;
}

function embedElementExperience(data, element = null) {
  let elm = "";
  element.innerHTML = "";

  if (!data.error) {
    const response = data.data;

    if (response.length > 0) {
      response.map((item) => {
        const calculateWork = calculateWorkPeriod(
          item.start_date,
          item.end_date
        );

        elm += `
                <div class="resume-item">
                        <h4 class="fw-bolder">${item.position}</h4>
                        <span class="fw-bolder fst-italic">${
                          item.company.name
                        } |<span style="font-size: 0.85rem;"> ${
          item.status
        }</span></span>
                        <div class="">
                            <p class="fst-italic" style="font-size: 0.85rem; color:grey">${
                              item.start_date
                            } - ${
          item.end_date
        }. &nbsp;&nbsp;&nbsp; ${calculateWork}</p>
                        </div>

                        <ul class="mt-3"> ${item.job_description
                          .map((i) => `<li>${i.description}</li>`)
                          .join("")}</ul>
                    </div>
            `;
      });
    }
  }

  element.innerHTML = elm;
}

const monthNames = {
  Januari: 0,
  Februari: 1,
  Maret: 2,
  April: 3,
  Mei: 4,
  Juni: 5,
  Juli: 6,
  Agustus: 7,
  September: 8,
  Oktober: 9,
  November: 10,
  Desember: 11,
};

function parseDate(dateString) {
  const [monthName, year] = dateString.split(" ");
  const month = monthNames[monthName];
  const date = new Date(year, month);
  return date;
}

function calculateWorkPeriod(start, end) {
  const startDate = parseDate(start);
  let endDate = "";

  if (end == "Sekarang") {
    endDate = new Date(Date.now());
  } else {
    endDate = parseDate(end);
  }

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} Tahun ${months} Bulan`;
}
