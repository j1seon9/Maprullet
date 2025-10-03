// 원본에 있던 전체 maps 배열
const maps = [
  {
    id: "어센트",
    name: "어센트",
    description: "어센트에서는 소규모 진지전과 소모전을 벌일 수 있는 개방 구역을 중심으로 두 지점이 나뉘어 있습니다. 각 지점은 해체 불가능한 폭탄 문으로 수비를 강화할 수 있으며, 일단 문이 닫히면 문을 파괴하거나 다른 길을 찾아야 합니다. 가능한 한 많은 지역을 지키세요.",
    image: "https://static.wikia.nocookie.net/valorant/images/e/e7/Loading_Screen_Ascent.png/revision/latest/scale-to-width-down/1000?cb=20200607180020",
    enabled: true
  },
  {
    id: "바인드",
    name: "바인드",
    description: "두 지점으로 구성되며 중간 지점이 없어 왼쪽 또는 오른쪽을 선택해야 합니다. 양쪽 지점에는 공격팀을 위한 지름길과 한쪽으로만 이동할 수 있는 순간이동기 한 쌍이 있어 측면 공격에 활용할 수 있습니다.",
    image: "https://static.wikia.nocookie.net/valorant/images/2/23/Loading_Screen_Bind.png/revision/latest/scale-to-width-down/1000?cb=20200620202316",
    enabled: true
  },
  {
    id: "헤이븐",
    name: "헤이븐",
    description: "잊혀진 수도원 아래에서 세 지점을 장악하기 위한 요원들의 전투가 활발히 벌어집니다. 장악해야 할 지역이 더 많지만, 수비팀이 추가 지역을 이용해 공격적인 압박을 가할 수 있습니다.",
    image: "https://static.wikia.nocookie.net/valorant/images/7/70/Loading_Screen_Haven.png/revision/latest/scale-to-width-down/1000?cb=20200620202335",
    enabled: true
  },
  {
    id: "스플릿",
    name: "스플릿",
    description: "멀리 가려면 위로 이동해야 합니다. 높이 솟아오른 중앙 구역이 두 지점을 나누고 있어 줄사다리 두 개를 이용해 재빨리 움직일 수 있죠. 각 지점에는 장악에 아주 중요한 탑이 세워져 있습니다. 속수무책으로 당하지 않으려면 꼭 위쪽을 확인하세요.",
    image: "https://static.wikia.nocookie.net/valorant/images/d/d6/Loading_Screen_Split.png/revision/latest/scale-to-width-down/1000?cb=20230411161807",
    enabled: true
  },
  {
    id: "아이스박스",
    name: "아이스박스",
    description: "다음 전장은 혹한 지대에 위치한 킹덤의 비밀 발굴 현장입니다. 눈과 쇠붙이로 둘러싸인 스파이크 설치 지점에서는 전후좌우로 능숙하게 교전하는 능력이 필수죠. 집라인을 이용한 기습 공격으로 적의 허를 찔러보세요.",
    image: "https://static.wikia.nocookie.net/valorant/images/1/13/Loading_Screen_Icebox.png/revision/latest/scale-to-width-down/1000?cb=20250730171440",
    enabled: true
  },
  {
    id: "브리즈",
    name: "브리즈",
    description: "열대 파라다이스의 역사적 유적과 해변 동굴의 경치를 만끽해보세요. 하지만 엄호가 필요할 겁니다. 탁 트인 넓은 공간에서 원거리 교전이 펼쳐지니까요. 측면 공격에 잘 대비한다면 승리에 한 걸음 다가갈 수 있을 것입니다.",
    image: "https://static.wikia.nocookie.net/valorant/images/1/10/Loading_Screen_Breeze.png/revision/latest/scale-to-width-down/1000?cb=20210427160616",
    enabled: true
  },
  {
    id: "프랙처",
    name: "프랙처",
    description: "레디어나이트 실험 실패로 파괴된 일급 비밀 연구 시설입니다. 수비팀의 전략은 맵처럼 두 갈래로 나누어집니다. 공격팀의 영역에서 맞붙거나 위기에 대비하여 공격을 견디세요.",
    image: "https://static.wikia.nocookie.net/valorant/images/f/fc/Loading_Screen_Fracture.png/revision/latest/scale-to-width-down/1000?cb=20210908143656",
    enabled: true
  },
  {
    id: "펄",
    name: "펄",
    description: "공격팀은 역동적인 수중 도시의 2개 지점으로 나뉜 맵에서 수비팀을 압박합니다. 펄은 기계적 요소가 없는 지형 기반의 맵입니다. 협소한 중앙과 양쪽의 긴 구역으로 이루어진 오메가 지구의 첫 번째 맵에서 전투를 벌이세요.",
    image: "https://static.wikia.nocookie.net/valorant/images/a/af/Loading_Screen_Pearl.png/revision/latest/scale-to-width-down/1000?cb=20220622132842",
    enabled: true
  },
  {
    id: "로터스",
    name: "로터스",
    description: "고대의 힘을 내뿜는 별 매개체를 간직한 신비로운 건축물입니다. 돌로 된 거대한 문은 다양한 이동 경로를 제공하며 신비로운 지점 3개로의 길을 열어줍니다.",
    image: "https://static.wikia.nocookie.net/valorant/images/d/d0/Loading_Screen_Lotus.png/revision/latest/scale-to-width-down/1000?cb=20230106163526",
    enabled: true
  },
  {
    id: "선셋",
    name: "선셋",
    description: "지역 킹덤사 시설에서 발생한 사고가 도시 전체로 번지려고 합니다. 단골 푸드 트럭에서 간단히 끼니를 해결하고, 공격로가 세 개인 전통적 구성의 맵에서 도시를 누비며 전투하세요.",
    image: "https://static.wikia.nocookie.net/valorant/images/5/5c/Loading_Screen_Sunset.png/revision/latest/scale-to-width-down/1000?cb=20230829125442",
    enabled: true
  },
  {
    id: "어비스",
    name: "어비스",
    description: "비밀보다 더 깊은 곳에 묻힌 은밀한 기지이자, 발로란트 최초의 경계가 없는 맵입니다.",
    image: "https://static.wikia.nocookie.net/valorant/images/6/61/Loading_Screen_Abyss.png/revision/latest/scale-to-width-down/1000?cb=20240730145619",
    enabled: true
  },
  {
    id: "코로드",
    name: "코로드",
    description: "프랑스의 한 성곽 마을이 라디안이트 소금 채굴 시설로 변했습니다. 전통적인 3차선 지도에서 재활용된 산업 기계를 활용하여 층층이 쌓인 방어선을 가로질러 전투를 벌이며 중세 거리를 포위하세요.",
    image: "https://static.wikia.nocookie.net/valorant/images/6/6f/Loading_Screen_Corrode.png/revision/latest/scale-to-width-down/1000?cb=20250624201813",
    enabled: true
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const mapPoolContainer = document.getElementById('mapPool');
  const mapCountElement = document.getElementById('mapCount');
  const currentMapImage = document.getElementById('currentMapImage');
  const currentMapName = document.getElementById('currentMapName');
  const currentMapDescription = document.getElementById('currentMapDescription');
  const randomizeButton = document.getElementById('randomizeButton');
  const animationSpeedSlider = document.getElementById('animationSpeed');
  const speedValueDisplay = document.getElementById('speedValue');
  const mapDisplay = document.getElementById('mapDisplay');

  let isAnimating = false;
  let animationInterval;

  function updateMapCount() {
    const enabledCount = maps.filter(map => map.enabled).length;
    mapCountElement.textContent = `${enabledCount}개의 맵이 활성화됐습니다`;
  }

  function generateMapToggles() {
    mapPoolContainer.innerHTML = '';
    maps.forEach(map => {
      const mapToggleItem = document.createElement('div');
      mapToggleItem.className = 'flex items-center justify-between p-3 bg-[#131e29] rounded-lg';

      mapToggleItem.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded overflow-hidden">
            <img src="${map.image}" alt="${map.name}" class="w-full h-full object-cover">
          </div>
          <span class="font-medium">${map.name}</span>
        </div>
        <label class="map-switch">
          <input type="checkbox" data-map-id="${map.id}" ${map.enabled ? 'checked' : ''}>
          <span class="map-slider"></span>
        </label>
      `;

      mapPoolContainer.appendChild(mapToggleItem);
    });

    document.querySelectorAll('.map-switch input').forEach(toggle => {
      toggle.addEventListener('change', function () {
        const mapId = this.getAttribute('data-map-id');
        const mapIndex = maps.findIndex(m => m.id === mapId);
        if (mapIndex !== -1) {
          maps[mapIndex].
